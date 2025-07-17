import Code from '../../../components/PresentationSlides/CodeBlock';
import SideNotes from '../../../components/PresentationSlides/SideNote';
import Slide from '../../../components/PresentationSlides/Slide';

export default function LetsCodeAUnitTestSlide() {
  return (
    <Slide>
      <h3>Let's see some code !</h3>

      <Code highlightLineNumbers='13|14|18-22|26|28|31' className='r-stretch'>
        {String.raw`import { configure, fireEvent, render } from '@testing-library/react';
import { deepMerge } from '@src/common/helpers/utils';
import MainPanelLayout from '@src/components/MainPanelLayout';
import { StoreState } from '@src/store';
import { getChatInputInput, getChatInputSendButton } from '@src/tests/getters';
import { WithTestWrapper } from '@src/tests/utils';
import { createMockReduxStore } from '@src/tests/utils/createMockReduxStore';
import ChatInput from './ChatInput';
import { expectedStateAfterChatInputSendMessage, initialStateBeforeChatInputSendMessage } from './test.constants';


describe('ChatInput', () => {
    test('flow request - ChatInput send message should update store state properly', () => {
        const mockStore = createMockReduxStore(initialStateBeforeChatInputSendMessage);

        const chatInputValue = 'world';

        render(
          <StoreProvider store={mockStore}>
            <MainPanelLayout initialText={chatInputValue} />
          </StoreProvider>
        );

        const chatInputSendButton = getChatInputSendButton() as HTMLInputElement;

        fireEvent.click(chatInputSendButton);

        const actualState = mockStore.getState() as Partial<StoreState>;

        const expectedState = deepMerge(initialStateBeforeChatInputSendMessage, expectedStateAfterChatInputSendMessage);
        expect(actualState).toEqual(expectedState);
    });
});`}
      </Code>

      <SideNotes>
        To understand how powerful this system is, let's examine how a unit would be written.
        <br />
        <br />I want to test the Request flow. Sending a message should update store state properly (click).
        <br />
        <br />
        So first I need to mock the store. Give it some initial state before the send message action (click).
        <br />
        <br />
        Render the ChatInput, wrapped in a store provider, provide it with the mocked store (click), and hit send - fire
        the event.
        <br />
        <br />
        The entire flow we talked about earlier will occur, and all I need to do now is just (click) grab the new state,
        the actual state, and compare it (click) with the expected state.
      </SideNotes>
    </Slide>
  );
}
