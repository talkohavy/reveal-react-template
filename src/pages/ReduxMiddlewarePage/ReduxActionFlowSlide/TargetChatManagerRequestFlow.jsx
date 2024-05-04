import clsx from 'clsx';
import { ANIMATION_CLASSES } from '../../../components/PresentationSlides/constants';
import ObjectWrapper from '../../../components/PresentationSlides/ObjectWrapper';
import Slide from '../../../components/PresentationSlides/Slide';
import FixedFrame from './FixedFrame';

export default function TargetChatManagerRequestFlow() {
  return (
    <Slide>
      {/* Frame 1: Dispatch chat-action from App */}
      <FixedFrame actionType='Request'>
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-blue-500 text-xl'
            style={{ marginBottom: 70, marginLeft: 70 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: chat)</div>
          </div>
        </ObjectWrapper>
      </FixedFrame>

      {/* Frame 2: Check chat-action against UI middleware */}
      <FixedFrame actionType='Request'>
        {/* Action */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-blue-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 196 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: chat)</div>
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

      {/* Frame 3: Check chat-action against chat middleware */}
      <FixedFrame actionType='Request'>
        {/* Action */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-blue-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 420 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: chat)</div>
          </div>
        </ObjectWrapper>

        <div className='fragment fade-in-then-out current-visible absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'>
          <p>Chat Manager: Should I handle it?</p>
          <p className='text-green-400'>Yes!</p>
        </div>

        <div
          className='fragment flex flex-col items-center justify-center'
          style={{ margin: '0 auto', marginBottom: 110 }}
        >
          <ul className='border p-6 text-xl'>
            <li className={clsx('fragment fade-in-then-out current-visible', ANIMATION_CLASSES.highlightBlue)}>
              <div className='fragment highlight-blue'>
                <div className='fragment semi-fade-out'>handle sendUserFeedbackFlow</div>
              </div>
            </li>

            <li className={clsx('fragment', ANIMATION_CLASSES.highlightBlue)}>
              <div className='fragment highlight-blue'>
                <div className='fragment semi-fade-out'>handle startChatFlow</div>
              </div>
            </li>

            <li className={clsx('fragment current-visible', ANIMATION_CLASSES.highlightBlue)}>
              <div className='fragment highlight-green'>handle sendMessageRequestFlow</div>
            </li>

            <li>handle sendMessageSuccessFlow</li>
            <li>handle sendMessageFailureFlow</li>
          </ul>
        </div>
      </FixedFrame>

      {/* Frame 4: Create new api-action for API middleware */}
      <FixedFrame actionType='Request'>
        {/* Action 1 */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-blue-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 420 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: chat)</div>
          </div>
        </ObjectWrapper>

        {/* Action 2 */}
        <ObjectWrapper position='bottomLeftCorner' className='fragment'>
          <div
            data-id='redux-action-2'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-teal-400 text-xl'
            style={{ marginBottom: 150, marginLeft: 420 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: api)</div>
          </div>
        </ObjectWrapper>
      </FixedFrame>

      {/* Frame 5: Check api-action against UI middleware */}
      <FixedFrame actionType='Request'>
        {/* Action 1 */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-blue-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 420 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: chat)</div>
          </div>
        </ObjectWrapper>

        {/* Action 2 */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action-2'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-teal-400 text-xl'
            style={{ marginBottom: 300, marginLeft: 196 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: api)</div>
          </div>
        </ObjectWrapper>
      </FixedFrame>

      {/* Frame 6: Check api-action against Chat-Manager middleware */}
      <FixedFrame actionType='Request'>
        {/* Action 1 */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-blue-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 420 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: chat)</div>
          </div>
        </ObjectWrapper>

        {/* Action 2 */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action-2'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-teal-400 text-xl'
            style={{ marginBottom: 300, marginLeft: 420 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: api)</div>
          </div>
        </ObjectWrapper>
      </FixedFrame>

      {/* Frame 7: Check api-action against API middleware */}
      <FixedFrame actionType='Request'>
        {/* Action 1 */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-blue-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 420 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: chat)</div>
          </div>
        </ObjectWrapper>

        {/* Action 2 */}
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action-2'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-teal-400 text-xl'
            style={{ marginBottom: 300, marginLeft: 644 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: api)</div>
          </div>
        </ObjectWrapper>
      </FixedFrame>

      {/* Frame 8: Release redux store */}
      <FixedFrame actionType='Request'>
        <div className='flex flex-col items-center justify-center' style={{ margin: '0 auto', marginBottom: 80 }}>
          <p>New Store State:</p>

          <ul className='border p-6 text-xl'>
            <li>new ChatMessage of type user</li>
            <li>spinner is now showing</li>
          </ul>
        </div>
      </FixedFrame>
    </Slide>
  );
}
