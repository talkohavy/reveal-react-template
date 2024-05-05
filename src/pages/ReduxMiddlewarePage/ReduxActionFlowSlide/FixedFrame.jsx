import ObjectWrapper from '../../../components/PresentationSlides/ObjectWrapper';
import SideNotes from '../../../components/PresentationSlides/SideNotes';
import Slide from '../../../components/PresentationSlides/Slide';

export default function FixedFrame(props) {
  const { actionType = '', children } = props;

  return (
    <Slide data-auto-animate>
      <h3>Action Flow - {actionType}</h3>

      <div className='r-stretch relative flex items-end justify-between p-6 text-left' data-id='2'>
        {/* App */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-app'
            className='flex size-44 items-center justify-center rounded-full bg-red-500 text-4xl'
          >
            App
          </div>
        </ObjectWrapper>

        {/* Reducer */}
        <ObjectWrapper position='bottomRightCorner'>
          <div
            data-id='redux-reducer'
            className='flex size-44 items-center justify-center rounded-full bg-green-500 text-4xl'
            style={{ marginBottom: 0, marginLeft: 0 }}
          >
            Reducer
          </div>
        </ObjectWrapper>

        {/* Middleware */}
        <ObjectWrapper position='topCenter'>
          <div
            data-id='redux-middleware'
            className='flex items-center justify-center'
            // style={{ marginBottom: 0, marginLeft: 0 }}
          >
            <div className='h-0.5 w-28 bg-white' />
            <div className='flex size-28 items-center justify-center border bg-orange-400 text-sm'>UI</div>
            <div className='h-0.5 w-28 bg-white' />
            <div className='flex size-28 items-center justify-center border bg-blue-500 text-sm'>Chat Manager</div>
            <div className='h-0.5 w-28 bg-white' />
            <div className='flex size-28 items-center justify-center border bg-teal-400 text-sm'>API</div>
            <div className='h-0.5 w-28 bg-white' />
          </div>
        </ObjectWrapper>

        {/* Action */}
        {children}
      </div>

      <SideNotes>
        I am mocking just the API middleware, and that's it. Then, everything precedes as it normally would (move
        forwards until action is aligned with mock), except... that now, when the action would arrive to the mock api
        middleware, I do NOT send a network request. In fact, I can do one of two things: I could mock the request, and
        have an entire flow be tested. Or...! I could just stop. right here (click). And test only the request part, to
        make sure to everything up until the request works properly.
      </SideNotes>
    </Slide>
  );
}
