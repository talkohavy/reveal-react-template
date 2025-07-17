import ObjectWrapper from '../../../components/PresentationSlides/Positioner';
import Slide from '../../../components/PresentationSlides/Slide';
import FixedFrame from './FixedFrame';

export default function TargetReducerFlow() {
  return (
    <Slide>
      {/* Frame 1: Dispatch reducer-action from App */}
      <FixedFrame actionType='Reducer'>
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-green-500 text-xl'
            style={{ marginBottom: 70, marginLeft: 70 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: reducer)</div>
          </div>
        </ObjectWrapper>
      </FixedFrame>

      {/* Frame 2: Check reducer-action against UI middleware */}
      <FixedFrame actionType='Reducer'>
        {/* Action */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-green-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 196 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: reducer)</div>
          </div>
        </ObjectWrapper>

        <div
          className='fragment flex flex-col items-center justify-center'
          style={{ margin: '0 auto', marginBottom: 110 }}
        >
          <p>UI: Should I handle it?</p>
          <p className='fragment text-red-600'>No...</p>
        </div>
      </FixedFrame>

      {/* Frame 3: Check reducer-action against chat-manager middleware */}
      <FixedFrame actionType='Reducer'>
        {/* Action */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-green-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 420 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: reducer)</div>
          </div>
        </ObjectWrapper>

        <div
          className='fragment flex flex-col items-center justify-center'
          style={{ margin: '0 auto', marginBottom: 110 }}
        >
          <p>Chat Manager: Should I handle it?</p>
          <p className='fragment text-red-600'>No...</p>
        </div>
      </FixedFrame>

      {/* Frame 4: Check reducer-action against API middleware*/}
      <FixedFrame actionType='Reducer'>
        {/* Action */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-green-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 644 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: reducer)</div>
          </div>
        </ObjectWrapper>

        <div
          className='fragment flex flex-col items-center justify-center'
          style={{ margin: '0 auto', marginBottom: 110 }}
        >
          <p>API: Should I handle it?</p>
          <p className='fragment text-center text-red-600'>No...</p>
        </div>
      </FixedFrame>

      {/* Frame 5: Check reducer-action against reducer*/}
      <FixedFrame actionType='Reducer'>
        {/* Action */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-green-500 text-xl'
            style={{ marginBottom: 70, marginLeft: 770 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: reducer)</div>
          </div>
        </ObjectWrapper>

        <div
          className='fragment flex flex-col items-center justify-center'
          style={{ margin: '0 auto', marginBottom: 110 }}
        >
          <p>reducer: Should I handle it?</p>
          <p className='fragment text-center text-green-400'>Yes!</p>
        </div>
      </FixedFrame>
    </Slide>
  );
}
