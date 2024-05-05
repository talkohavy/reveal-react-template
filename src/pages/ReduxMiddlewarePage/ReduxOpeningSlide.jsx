import Slide from '../../components/PresentationSlides/Slide';
import image from './fisherman.png';

export default function ReduxOpeningSlide() {
  return (
    <Slide>
      <h1>Redux Middleware</h1>

      <div className='r-stretch flex flex-col items-center justify-between'>
        <p style={{ marginTop: 100, color: 'blue' }}>Refactor code that uses redux middleware</p>

        <p style={{ marginTop: 100, color: 'blue' }}>Or teach a man how to fish</p>

        <img data-src={image} alt='teach a man how to fish' className='w-64 self-end' />
      </div>
    </Slide>
  );
}
