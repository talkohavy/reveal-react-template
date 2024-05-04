import clsx from 'clsx';
import { ANIMATION_CLASSES } from '../../../components/PresentationSlides/constants';
import ObjectWrapper from '../../../components/PresentationSlides/ObjectWrapper';
import Slide from '../../../components/PresentationSlides/Slide';
import FixedFrame from './FixedFrame';

export default function TargetChatManagerSuccessFlow() {
  return (
    <Slide>
      {/* Frame 1: Dispatch success-action from API */}
      <FixedFrame actionType='Success'>
        <ObjectWrapper position='bottomLeftCorner'>
          <div
            data-id='redux-action'
            className='flex size-30 flex-col items-center justify-center rounded-full bg-blue-500 text-xl'
            style={{ marginBottom: 300, marginLeft: 644 }}
          >
            <div>action</div>
            <div className='text-xs'>(target: chat)</div>
          </div>
        </ObjectWrapper>
      </FixedFrame>

      {/* Frame 2: Check chat-action against UI middleware */}
      <FixedFrame actionType='Success'>
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
      </FixedFrame>

      {/* Frame 3: Check chat-action against Chat-Manager middleware */}
      <FixedFrame actionType='Success'>
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

            <li className={clsx('fragment', ANIMATION_CLASSES.highlightBlue)}>
              <div className='fragment highlight-blue'>
                <div className='fragment semi-fade-out'>handle sendMessageRequestFlow</div>
              </div>
            </li>

            <li className={clsx('fragment current-visible', ANIMATION_CLASSES.highlightBlue)}>
              <div className='fragment highlight-green'>handle sendMessageSuccessFlow</div>
            </li>

            <li>handle sendMessageFailureFlow</li>
          </ul>
        </div>
      </FixedFrame>

      {/* Frame 4: Release redux store */}
      <FixedFrame actionType='Success'>
        <div className='flex flex-col items-center justify-center' style={{ margin: '0 auto', marginBottom: 80 }}>
          <p>New Store State:</p>

          <ul className='border p-6 text-xl'>
            <li>new ChatMessage of type Bot</li>
            <li>spinner is now hidden</li>
          </ul>
        </div>
      </FixedFrame>
    </Slide>
  );
}
