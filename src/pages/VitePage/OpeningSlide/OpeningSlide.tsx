import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';
import styles from './OpeningSlide.module.css';

export default function OpeningSlide() {
  return (
    <Slide
      slideConfig={{ dataBackgroundGradient: 'linear-gradient(135deg, #646cff 0%, #747bff 100%)' }}
      className={styles.openingSlide}
    >
      <h1 className={styles.myH1}>⚡ Vite</h1>

      <div className='r-stretch flex flex-col items-center justify-between'>
        <p className='!text-4xl text-center'>Next Generation Frontend Tooling</p>

        <img src='/vite.svg' alt='Vite Logo' className={styles.viteLogo} />

        <div className='r-hstack text-6xl mt-12'>
          <div>🐌</div>
          <div>&nbsp;</div>
          <div className='text-4xl'>➡️</div>
          <div>&nbsp;</div>
          <div>⚡</div>
        </div>

        <p className='text-lg !text-gray-300 italic'>Why Vite is the modern replacement for Create React App</p>
      </div>

      <SideNotes>
        Welcome to our presentation about Vite! Today we'll explore why Vite has become the go-to choice for modern
        React development, replacing the aging Create React App. We'll cover performance improvements, developer
        experience enhancements, and how easy it is to make the switch.
      </SideNotes>
    </Slide>
  );
}
