import ObjectWrapper from '../../../components/PresentationSlides/ObjectWrapper';
import SideNotes from '../../../components/PresentationSlides/SideNotes';
import Slide from '../../../components/PresentationSlides/Slide';

const SIDE_NOTES_RENDERER = {
  Reducer: () => (
    <SideNotes>
      Let's see what an action flow looks like:
      <br />
      The Application is dispatching an action (click).
      <br />
      Mind you... that within that reducer, there could be a 100 if else cases, whereas here I only added 3.
      <br />
      Ok. So that wasn't very interesting. Let's look at a more interesting one.
    </SideNotes>
  ),
  Request: () => (
    <SideNotes>
      This is an example of a Request flow, meaning it includes async code.
      <br />
      <br />
      Once the chat middleware has answered "yes", it now looks for the correct action handler (click). Every middleware
      has at least 1 action handler. Otherwise, it doesn't stand the right to exist (click until green). The action
      handler is triggered, and it prepares everything needed prior to sending the network request, and when its done,
      it creates an api action (click), meant for the api middleware.
      <br />
      <br />
      Same flow (click). The API middleware catches that action, sends a request to the server, and the store is
      released. Note that this entire time, the App hangs. No other renders are going on during that time.
      <br />
      <br />
      And so when the store gets release, i'm left with a new store state, and then I let the app render accordingly.
    </SideNotes>
  ),
  Success: () => (
    <SideNotes>
      3 seconds later, a 200 response from the server comes in, and so the API middleware dispatches the action that it
      was given to dispatch, same flow again, catching, calling the right action handler, doing what needs to be done,
      releasing the store, and letting the App render with its new state.
    </SideNotes>
  ),
  request: () => (
    <SideNotes>
      I am mocking just the API middleware, and that's it. Then, everything precedes as it normally would (move forwards
      until action is aligned with mock), except... that now, when the action would arrive to the mock api middleware, I
      do NOT send a network request. In fact, I can do one of two things: I could mock the request, and have an entire
      flow be tested. Or...! I could just stop. right here (click). And test only the request part, to make sure to
      everything up until the request works properly.
    </SideNotes>
  ),
};

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

      {SIDE_NOTES_RENDERER[actionType]?.()}
    </Slide>
  );
}
