import clsx from 'clsx';
import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';
import styles from './OpeningSlide.module.css';

export default function OpeningSlide() {
  return (
    <Slide
      slideConfig={{ dataBackgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      className={styles.openingSlide}
    >
      <h1 className={clsx('text-6xl font-bold mb-8', styles.myH1)}>🤖 AI Planning</h1>

      <div className='r-stretch flex flex-col items-center justify-between'>
        <p className='text-2xl mt-16 text-center'>The Three Magic Lines That Transform Chaos Into Clarity</p>

        <div className='r-hstack text-8xl mt-12'>
          <div>🧠</div>
          <div>&nbsp;</div>
          <div className='text-4xl'>➡️</div>
          <div>&nbsp;</div>
          <div>📋</div>
          <div>&nbsp;</div>
          <div className='text-4xl'>➡️</div>
          <div>&nbsp;</div>
          <div>🚀</div>
        </div>

        <p className='text-lg text-gray-300 mt-8 italic'>From scattered thoughts to structured success</p>
      </div>

      <SideNotes>
        Welcome to our presentation about AI Planning! Today we'll explore how three simple lines can revolutionize your
        project planning process. This isn't just about documentation - it's about unleashing the true power of AI
        collaboration through structured thinking.
      </SideNotes>
    </Slide>
  );
}
