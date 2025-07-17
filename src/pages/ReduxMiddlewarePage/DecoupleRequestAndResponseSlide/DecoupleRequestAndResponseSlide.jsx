import ObjectWrapper from '../../../components/PresentationSlides/Positioner';
import SideNotes from '../../../components/PresentationSlides/SideNote';
import Slide from '../../../components/PresentationSlides/Slide';

export default function DecoupleRequestAndResponseSlide() {
  return (
    <Slide>
      <h3>Request & Response</h3>

      <div className='r-stretch relative w-full border'>
        <ObjectWrapper position='leftCenter'>
          <div className='w-56 border bg-blue-500 p-6' style={{ marginLeft: 60 }}>
            Request
          </div>
        </ObjectWrapper>

        <ObjectWrapper position='topRightCorner'>
          <div className='w-56 border bg-green-500 p-6' style={{ marginTop: 115, marginRight: 115 }}>
            success
          </div>
        </ObjectWrapper>

        <ObjectWrapper position='bottomRightCorner'>
          <div className='w-56 border bg-red-500 p-6' style={{ marginBottom: 115, marginRight: 115 }}>
            Failure
          </div>
        </ObjectWrapper>

        <ObjectWrapper position='center'>
          <svg className='h-sm w-sm rounded-full' viewBox='0 0 100 100'>
            <title>async/await</title>
            <circle cx={50} cy={50} r={10} fill='white' />
            <line x1='50' y1='50' x2='0' y2='50' stroke='white' strokeLinecap='round' />
            <line x1='50' y1='50' x2='100' y2='0' stroke='white' strokeLinecap='round' />
            <line x1='50' y1='50' x2='100' y2='100' stroke='white' strokeLinecap='round' />
          </svg>
        </ObjectWrapper>
      </div>

      <SideNotes>
        What have I done here really?
        <br />
        <br />
        Essentially what I did was... I decoupled the request from the response.
        <br />
        <br />
        And that enables me to test the request part separately, and the response part separately.
        <br />
        <br />
        And how am I doing that?
      </SideNotes>
    </Slide>
  );
}
