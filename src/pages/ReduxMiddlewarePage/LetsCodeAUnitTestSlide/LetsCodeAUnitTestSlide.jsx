import Code from '../../../components/PresentationSlides/Code';
import Slide from '../../../components/PresentationSlides/Slide';

export default function LetsCodeAUnitTestSlide() {
  return (
    <Slide>
      <h3>Let's see some code !</h3>

      <div className='r-stretch border'>
        <Code highlightLineNumbers='13|14|18-22|26|28|31'>
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

        const actualState = store.getState() as Partial<StoreState>;

        const expectedState = deepMerge(initialStateBeforeChatInputSendMessage, expectedStateAfterChatInputSendMessage);
        expect(actualState).toEqual(expectedState);
    });
});`}
        </Code>
      </div>
    </Slide>
  );
}
