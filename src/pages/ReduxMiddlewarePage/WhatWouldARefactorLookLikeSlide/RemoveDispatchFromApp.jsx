import Code from '../../../components/PresentationSlides/Code';
import SideNotes from '../../../components/PresentationSlides/SideNote';
import Slide from '../../../components/PresentationSlides/Slide';

export default function RemoveDispatchFromApp() {
  return (
    <Slide>
      <Slide slideConfig={{ dataAutoAnimate: true }}>
        <h3>What would a refactor look like?</h3>

        <p className='text-left' style={{ marginLeft: 49 }}>
          <i>filename: MainPanelLayout</i>
        </p>

        <Code highlightLineNumbers='6,8'>
          {String.raw`export default function MainPanelLayout(props: PropsWithChildren) {
  // ...
  const handleSendClick = (value: string) => {
    setQueryText('');
    if (currentPage === Pages.homeView) {
      dispatch(startNewChatFlow({ message: value }));
    } else {
      dispatch(sendMessageFlow({ message: value }));
    }
  };
  // ...
}`}
        </Code>

        <SideNotes>On the application's side, we simply need to remove the `dispatch`.</SideNotes>
      </Slide>

      <Slide slideConfig={{ dataAutoAnimate: true }}>
        <h3>What would a refactor look like?</h3>

        <p className='text-left' style={{ marginLeft: 49 }}>
          <i>filename: MainPanelLayout</i>
        </p>

        <Code highlightLineNumbers='6,8'>
          {String.raw`export default function MainPanelLayout(props: PropsWithChildren) {
  // ...
  const handleSendClick = (value: string) => {
    setQueryText('');
    if (currentPage === Pages.homeView) {
      startNewChatFlow({ message: value });
    } else {
      sendMessageFlow({ message: value });
    }
  };
  // ...
}
`}
        </Code>
      </Slide>
    </Slide>
  );
}
