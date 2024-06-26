import Code from '../../components/PresentationSlides/Code';
import Slide from '../../components/PresentationSlides/Slide';

export default function TypeScriptCode() {
  return (
    <Slide>
      <h3>TypeScript Code</h3>

      <Code
        language='typescript'
        // highlightLineNumbers='93-105'
      >
        {String.raw`'use strict'

import { useMemo, useEffect } from 'react';
import { convertReactPropsToRevealProps } from '../utils/convertReactPropsToRevealProps';

type MyArrowFunc = {
  name: string;
}

myArrowFunc((props: MyArrowFunc) => {console.log(props);});

const aaa = ()=> {
    
}

while(true){

}

try {

}catch(error){

}

/**
 * @typedef {import('../types').SlideConfig} SlideConfig
 */

const UPPER_CASE_CONST = 300;

// TODO: need to fix this arrow function...
const myArrowFunc = ( aaa ) => { return void Promise.resolve(5); }
const myArrowFunc2 = async ( aaa ) => { return void Promise.resolve(5); }

function killMe(arr) {
    return void arr.pop();
}

async function killMe2(arr) {
    return void arr.pop();
}

class Person {
    constructor(name){
        super('kill me')
        this.name = name;
    }
}

for (let i = 0; i < 2; i++) {
    console.log('props');
}

const person = new Person('tal');

JSON.stringify(person);

/**
 * @param {import('react').PropsWithChildren<{
 *   slideConfig?: SlideConfig,
 *   className?: string
 * }>} props
 */
export default function Slide ( props ) {
  const { children, slideConfig, className, ...rawRestProps } = props;

  /* Run query on page load: */
  useEffect(() => {
    async function chatQueryRequest() {}

    chatQueryRequest()
  }, [])

  if (!message) {
    throw new Error('we fkd up...');
  }

  const aaa1 = 1234567890;
  const aaa2 = true;
  var aaa3 = 'string';
  const aaa4 = {
    a: null,
    // Greets you hello!
    hello: 'world',
  };

  Number.parseInt(aaa);

  console.log(typeof aaa);

  const revealProps = useMemo(() => convertReactPropsToRevealProps(slideConfig), [slideConfig]);

  return (
    <Slide>
      <Component text="hello kitty">
        <img src='hello.jpg' alt="chicken" />
      </Component>

      <div>
        will this close?
      </div>

      <section {...revealProps} data-state={className} ...rawRestProps>children
      </section>
    </Slide>
  );
}





async function sendMessageFlow(props) {
    const { message } = props;

    if (!message) {
        throw new Error('we fkd up...');
    }

    const { chats, activeChatId } = store.getState().chatManager;
    const { chatHistory, sequenceNumber, lastTable, deviceList } = chats[activeChatId!];

    const userChatMessage = { role: ChatRole.User, content: message };
    const updatedChatHistory = [...chatHistory, userChatMessage];
    store.dispatch(updateChatHistory({ chatId: activeChatId, chatHistory: updatedChatHistory }));

    const formattedChatHistory = formatChatHistoryForServer(updatedChatHistory);

    const requestParams = {
        chatHistory: formattedChatHistory,
        session_id: activeChatId,
        sequence_number: sequenceNumber,
        last_table: lastTable,
        device_list: deviceList,
    };

    chatQueryRequest({ requestParams, chatId: activeChatId, userChatMessageId: chatHistory.length });
}

async function chatQueryRequest(props) {
    const { requestParams, chatId, userChatMessageId, shouldFixTypos } = props;

    store.dispatch(showChatSpinner({ chatId }));

    try {
        const response = await chatbotDAL.sendChatQuery({ requestParams, shouldFixTypos });

        const { chats, activeChatId } = store.getState().chatManager;

        // NOTE! i'm using chatId here and NOT activeChatId. because until a response arrive, the activeChatId might change.
        if (!chats[chatId]) {
            // return console.warn(
            //     \`a response for chat with id of \${chatId} had arrived but chat couldn't be found. user probably deleted the chat before the arrival of the response. ignoring response!\`,
            // );
        }

        const { chatHistory } = chats[chatId];

        const newLastTable = response.last_table ?? requestParams.last_table;
        const assistantChatMessage = {
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
            // return console.warn(
            //     \`a response for chat with id of \${chatId} had arrived but chat couldn't be found. user probably deleted the chat before the arrival of the response. ignoring response!\`,
            // );
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
    </Slide>
  );
}
