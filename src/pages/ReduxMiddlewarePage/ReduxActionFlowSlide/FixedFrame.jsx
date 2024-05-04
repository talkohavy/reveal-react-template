import ObjectWrapper from '../../../components/PresentationSlides/ObjectWrapper';
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
    </Slide>
  );
}
