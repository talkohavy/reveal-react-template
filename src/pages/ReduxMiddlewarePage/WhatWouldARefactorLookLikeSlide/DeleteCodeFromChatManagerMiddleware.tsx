import Code from '../../../components/CodeBlock';
import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function DeleteCodeFromChatManagerMiddleware() {
  return (
    <Slide>
      <h3>What would a refactor look like?</h3>

      <p className='text-left' style={{ marginLeft: 49 }}>
        <i>filename: chatManager/middleware.ts</i>
      </p>

      <Code startFromLineNumber={41} highlightLineNumbers='24|25-43|46|47-58' className='r-stretch'>
        {String.raw`import { apiRequestFlow } from '../api/actions';

const chatManagerMiddleware = createMiddleware({
    name,
    handleAction: ({ action, dispatch, getState }) => {
        if (startNewChatFlow.match(action)) {
            const { message } = action.payload;

            const chatId = uuid();

            const chatObject = {
                title: message,
                status: ChatStatus.NewChat,
                sequenceNumber: 0,
                chatHistory: [],
            };

            dispatch(createNewChat({ chatId, chatObject }));
            dispatch(setActiveChatId({ chatId }));
            dispatch(updateCurrentPage({ page: Pages.chatView }));
            dispatch(sendMessageFlow({ message }));
        }

        if (sendMessageFlow.match(action)) {
            const { message } = action.payload;

            const { chats, activeChatId } = getState().chatManager;
            const { chatHistory, sequenceNumber, lastTable, deviceList } = chats[activeChatId!];

            const userChatMessage: ChatMessage = { role: ChatRole.User, content: message };
            const updatedChatHistory = [...chatHistory, userChatMessage];
            dispatch(updateChatHistory({ chatId: activeChatId!, chatHistory: updatedChatHistory }));

            const formattedChatHistory = formatChatHistoryForServer(updatedChatHistory);

            const requestParams: ChatRequest = {
                chatHistory: formattedChatHistory,
                session_id: activeChatId!,
                sequence_number: sequenceNumber,
                last_table: lastTable,
                device_list: deviceList,
            };
            dispatch(chatQueryRequest({ requestParams, chatId: activeChatId!, userChatMessageId: chatHistory.length }));
        }

        if (chatQueryRequest.match(action)) {
            const { requestParams, chatId, userChatMessageId, shouldFixTypos } = action.payload;

            dispatch(showChatSpinner({ chatId }));

            dispatch(
                apiRequestFlow({
                    dalMethodName: 'sendChatQuery',
                    dalMethodProps: { requestParams, shouldFixTypos },
                    onSuccess: chatQuerySuccess,
                    onFailure: chatQueryFailure,
                }),
            );
        }

        if (chatQuerySuccess.match(action)) {
            const { response, requestMetadata } = action.payload;
            const { chatId, sequenceNumber, lastTable, deviceList } = requestMetadata;

            const { chats, activeChatId } = getState().chatManager;

            // NOTE! i'm using chatId here and NOT activeChatId. because until a response arrive, the activeChatId might change.
            if (!chats[chatId]) {
                return console.warn(
                    \`a response for chat with id of \${chatId} had arrived but chat couldn't be found. user probably deleted the chat before the arrival of the response. ignoring response!\`,
                );
            }

            const { chatHistory } = chats[chatId];

            const newLastTable = response.last_table ?? lastTable;
            const assistantChatMessage: ChatMessage = {
                role: ChatRole.Assistant,
                content: response,
                sequenceNumber,
                targetTable: newLastTable,
            };
            const updatedChatHistory = [...chatHistory, assistantChatMessage];
            dispatch(updateChatHistory({ chatId, chatHistory: updatedChatHistory }));

            const newDeviceList = response.device_list ?? deviceList;
            const nextSequenceNumber = sequenceNumber + 1;
            dispatch(
                updateChatById({
                    chatId,
                    sequenceNumber: nextSequenceNumber,
                    lastTable: newLastTable,
                    deviceList: newDeviceList,
                }),
            );

            dispatch(hideChatSpinner({ chatId }));

            if (chatId === activeChatId) dispatch(focusOnChatInput());
        }

        if (chatQueryFailure.match(action)) {
            const { chatId, userChatMessageId } = action.payload.requestMetadata;

            const chat = getState().chatManager.chats[chatId];

            if (!chat) {
                return console.warn(
                    \`a response for chat with id of \${chatId} had arrived but chat couldn't be found. user probably deleted the chat before the arrival of the response. ignoring response!\`,
                );
            }

            console.error('Error in sending a query to the server', action.payload.error);

            const updatedChatHistory = [...chat.chatHistory]; // <--- to avoid mutation! do not use chat.chatHistory directly

            markUserMessageAsErrored({ chatHistory: updatedChatHistory, userChatMessageId });

            const chatbotErrorResponse = { role: ChatRole.Assistant, content: fetchMeAnError(), isError: true };
            updatedChatHistory.push(chatbotErrorResponse);

            dispatch(updateChatHistory({ chatId, chatHistory: updatedChatHistory }));
            dispatch(hideChatSpinner({ chatId }));
        }

        if (newConversationFlow.match(action)) {
            dispatch(setActiveChatId({ chatId: null }));
            dispatch(updateCurrentPage({ page: Pages.homeView }));
        }

        if (deleteChatFlow.match(action)) {
            const { chatId } = action.payload;

            const { activeChatId } = getState().chatManager;

            dispatch(deleteChat({ chatId }));
            if (chatId === activeChatId) dispatch(newConversationFlow());
        }

        if (historyItemClickFlow.match(action)) {
            const { chatId } = action.payload;

            dispatch(setActiveChatId({ chatId }));
            dispatch(updateCurrentPage({ page: Pages.chatView }));
        }

        if (sendFeedbackFlow.match(action)) {
            const { messageId, userFeedbackStatus } = action.payload;

            const { activeChatId: chatId, chats } = getState().chatManager;

            const { chatHistory } = chats[chatId!];
            const userChatMessage = chatHistory[messageId - 1];
            const assistantChatMessage = { ...chatHistory[messageId], userFeedbackStatus };

            // NOTE: this is an optimistic update!
            dispatch(setUserFeedbackStatus({ chatId: chatId!, messageId, userFeedbackStatus }));

            const formattedChatHistory = formatChatHistoryForServer([userChatMessage, assistantChatMessage]);

            const requestParams: FeedbackRequest = {
                chatHistory: formattedChatHistory,
                session_id: (assistantChatMessage.content as ChatResponse).session_id,
                sequence_number: assistantChatMessage.sequenceNumber!,
                userFeedbackStatus,
            };

            dispatch(
                sendFeedbackRequest({
                    requestParams,
                    requestMetadata: {
                        chatId,
                        messageId,
                        previousUserFeedbackStatus: chatHistory[messageId].userFeedbackStatus,
                    },
                }),
            );
        }

        if (sendFeedbackRequest.match(action)) {
            const { requestParams, requestMetadata } = action.payload;

            dispatch(
                apiRequestFlow({
                    dalMethodName: 'sendFeedback',
                    dalMethodProps: { requestParams },
                    onSuccess: sendFeedbackSuccess,
                    onFailure: sendFeedbackFailure,
                    requestMetadata,
                }),
            );
        }

        if (sendFeedbackFailure.match(action)) {
            const { chatId, messageId, previousUserFeedbackStatus } = action.payload.requestMetadata;

            // sendFeedback failed! Roll back the optimistic update to what it was before.
            dispatch(
                setUserFeedbackStatus({ chatId: chatId!, messageId, userFeedbackStatus: previousUserFeedbackStatus }),
            );
        }

        if (sendOriginalRequestFlow.match(action)) {
            const { messageId: assistantMessageId } = action.payload;

            const { activeChatId } = getState().chatManager;

            dispatch(deleteChatMessageById({ chatId: activeChatId!, messageId: assistantMessageId }));

            const { chatHistory, sequenceNumber } = getState().chatManager.chats[activeChatId!];

            const requestParams: ChatRequest = {
                chatHistory: formatChatHistoryForServer(chatHistory),
                session_id: activeChatId!,
                sequence_number: sequenceNumber,
            };

            dispatch(
                chatQueryRequest({
                    shouldFixTypos: false,
                    requestParams,
                    chatId: activeChatId!,
                    userChatMessageId: chatHistory.length,
                }),
            );
        }

        if (terminateAllPendingResponsesFlow.match(action)) {
            const { chats } = getState().chatManager;

            Object.entries(chats).forEach(([currentChatId, currentChat]) => {
                if (currentChat.status === ChatStatus.PendingResponse) {
                    const { chatHistory: oldChatHistory } = chats[currentChatId!];
                    const updatedChatHistory = [...oldChatHistory]; // <--- to avoid mutation! do not use oldChatHistory directly

                    markUserMessageAsErrored({
                        chatHistory: updatedChatHistory,
                        userChatMessageId: updatedChatHistory.length - 1,
                    });

                    const chatbotErrorResponse = { role: ChatRole.Assistant, content: INTERRUPTED, isError: true };
                    updatedChatHistory.push(chatbotErrorResponse);

                    dispatch(updateChatHistory({ chatId: currentChatId, chatHistory: updatedChatHistory }));
                    dispatch(hideChatSpinner({ chatId: currentChatId }));
                }
            });
        }
    },
});

export { chatManagerMiddleware };`}
      </Code>

      <SideNotes>
        On the chatManager's middleware file, we need to bring together the sendMessage flow, which is the preparation
        (click) before the request (click),
        <br />
        <br />
        the request itself (click), which is nothing more than a spinner & and choosing the DAL method to invoke.
        <br />
        <br />
      </SideNotes>
    </Slide>
  );
}
