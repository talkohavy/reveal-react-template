import Code from '../../../components/PresentationSlides/Code';
import Slide from '../../../components/PresentationSlides/Slide';

export default function LetsCodeAUnitTestSlide() {
  return (
    <Slide>
      <h3>Let's see some code</h3>

      <div className='r-stretch border'>
        <Code>
          {String.raw`import { configure, fireEvent, render } from '@testing-library/react';
import { StoreState } from '@src/store';
import { getSidePanel, getSidePanelExpandButton } from '@src/tests/getters';
import { WithTestWrapper } from '@src/tests/utils';
import { createMockReduxStore } from '@src/tests/utils/createMockReduxStore';
import SidePanel from './SidePanel';
import { expectedStateSidePanelExpandButtonClicked } from './test.constants';

configure({ testIdAttribute: 'auto-id' });

function tal (){
  if(true){
    return 5000;
  }
}

describe('SidePanel', () => {
    test('should render SidePanel component', () => {
        render(<SidePanel />, { wrapper: WithTestWrapper() });

        const sidePanel = getSidePanel() as HTMLInputElement;

        expect(sidePanel).toBeInTheDocument();
    });

    test('should expand SidePanel when clicking the expansion button', () => {
        const store = createMockReduxStore();

        render(<SidePanel />, { wrapper: WithTestWrapper({ store }) });
        configure({ testIdAttribute: 'data-test-id' });

        const sidePanelButton = getSidePanelExpandButton() as HTMLInputElement;

        fireEvent.click(sidePanelButton);

        const actualState = store.getState() as Partial<StoreState>;

        expect(actualState).toEqual(expectedStateSidePanelExpandButtonClicked);
    });
});`}
        </Code>
      </div>
    </Slide>
  );
}
