import Code from '../../../components/CodeBlock';
import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function AfterRefactor() {
  return (
    <Slide>
      <h3>After Refactor</h3>

      <Code highlightLineNumbers='14|15-32|34|44|47,50,52'>
        {String.raw`import { fetchMeAnError } from '@src/common/helpers/errorMonkey';
import { chatbotDAL } from '@src/dal/chat/chatBotApiDAL';
import { ChatRequest } from '@src/models/chat/dto';
import { ChatMessage, ChatRole } from '@src/models/chat/types';
import { store } from '@src/store';
import { focusOnChatInput } from '../../ui/reducer';
import { formatChatHistoryForServer, markUserMessageAsErrored } from '../helpers';
import { hideChatSpinner, showChatSpinner, updateChatById, updateChatHistory } from '../reducer';

type SendMessageFlowProps = {
    message: string;
};

async function sendMessageFlow(props: SendMessageFlowProps) {
    const { message } = props;

    const { chats, activeChatId } = store.getState().chatManager;
    const { chatHistory, sequenceNumber, lastTable, deviceList } = chats[activeChatId!];

    const userChatMessage: ChatMessage = { role: ChatRole.User, content: message };
    const updatedChatHistory = [...chatHistory, userChatMessage];
    store.dispatch(updateChatHistory({ chatId: activeChatId!, chatHistory: updatedChatHistory }));

    const formattedChatHistory = formatChatHistoryForServer(updatedChatHistory);

    const requestParams: ChatRequest = {
        chatHistory: formattedChatHistory,
        session_id: activeChatId!,
        sequence_number: sequenceNumber,
        last_table: lastTable,
        device_list: deviceList,
    };

    chatQueryRequest({ requestParams, chatId: activeChatId!, userChatMessageId: chatHistory.length });
}

type ChatQueryRequestProps = {
    requestParams: ChatRequest;
    chatId: string;
    userChatMessageId: number;
    shouldFixTypos?: boolean;
};

async function chatQueryRequest(props: ChatQueryRequestProps) {
    const { requestParams, chatId, userChatMessageId, shouldFixTypos } = props;

    store.dispatch(showChatSpinner({ chatId }));

    try {
        const response = await chatbotDAL.sendChatQuery({ requestParams, shouldFixTypos });

        const { chats, activeChatId } = store.getState().chatManager;

        // NOTE! i'm using chatId here and NOT activeChatId. because until a response arrive, the activeChatId might change.
        if (!chats[chatId]) {
            return console.warn(
                \`a response for chat with id of \${chatId} had arrived but chat couldn't be found. user probably deleted the chat before the arrival of the response. ignoring response!\`,
            );
        }

        const { chatHistory } = chats[chatId];

        const newLastTable = response.last_table ?? requestParams.last_table;
        const assistantChatMessage: ChatMessage = {
            role: ChatRole.Assistant,
            content: response,
            sequenceNumber: requestParams.sequence_number,
            targetTable: newLastTable,
        };
        const updatedChatHistory = [...chatHistory, assistantChatMessage];
        store.dispatch(updateChatHistory({ chatId, chatHistory: updatedChatHistory }));

        const newDeviceList = response.device_list ?? requestParams.device_list;
        const nextSequenceNumber = requestParams.sequence_number! + 1;
        store.dispatch(
            updateChatById({
                chatId,
                sequenceNumber: nextSequenceNumber,
                lastTable: newLastTable,
                deviceList: newDeviceList,
            }),
        );

        if (chatId === activeChatId) store.dispatch(focusOnChatInput());
    } catch (error) {
        const chat = store.getState().chatManager.chats[chatId];

        if (!chat) {
            return console.warn(
                \`a response for chat with id of \${chatId} had arrived but chat couldn't be found. user probably deleted the chat before the arrival of the response. ignoring response!\`,
            );
        }

        console.error('Error in sending a query to the server', error);

        const updatedChatHistory = [...chat.chatHistory]; // <--- to avoid mutation! do not use chat.chatHistory directly

        markUserMessageAsErrored({ chatHistory: updatedChatHistory, userChatMessageId });

        const chatbotErrorResponse = { role: ChatRole.Assistant, content: fetchMeAnError(), isError: true };
        updatedChatHistory.push(chatbotErrorResponse);

        store.dispatch(updateChatHistory({ chatId, chatHistory: updatedChatHistory }));
    }

    store.dispatch(hideChatSpinner({ chatId }));
}

export { sendMessageFlow, chatQueryRequest };`}
      </Code>

      <SideNotes>
        So this is how the final result of the refactor would look like:
        <br />
        <br />
        We'd have a simple async function, sendMessageFlow, which does the same preparation,
        <br />
        <br />
        calling chatQueryRequest (click), and here is the Achilles heel of this whole refactor.
        <br />
        <br />
        since now, if I wanted to test this flow, I would have to mock 2 global instances, 2 singletons. One is the
        store, as we've already mentioned, and the second one is the chatbotDAL.
      </SideNotes>
    </Slide>
  );
}
