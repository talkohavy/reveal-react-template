import CodeBlock from '../../../components/CodeBlock';
import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function CallToActionSlide() {
  const startCommand = 'npm create vite@latest my-react-app -- --template react-ts';

  return (
    <Slide>
      <h2 className='!text-5xl font-bold !text-blue-400'>🚀 Ready to Go Fast?</h2>

      <div className='r-stretch flex flex-col justify-center'>
        <div className='text-center mb-6'>
          <h3 className='!text-3xl font-bold !text-yellow-300'>Start Your Vite Journey Today</h3>
          <p className='text-xl text-gray-300'>One command is all it takes:</p>
        </div>

        <CodeBlock language='bash' className='text-lg mb-6'>
          {startCommand}
        </CodeBlock>

        <div className='grid grid-cols-3 gap-6 text-center mb-6'>
          <div className='bg-gray-800/50 rounded-lg p-4'>
            <div className='text-4xl mb-2'>⚡</div>
            <h4 className='font-bold !text-green-300'>Instant Start</h4>
            <p className='text-sm text-gray-300'>No more waiting</p>
          </div>

          <div className='bg-gray-800/50 rounded-lg p-4'>
            <div className='text-4xl mb-2'>🔥</div>
            <h4 className='font-bold !text-yellow-300'>Lightning HMR</h4>
            <p className='text-sm text-gray-300'>See changes instantly</p>
          </div>

          <div className='bg-gray-800/50 rounded-lg p-4'>
            <div className='text-4xl mb-2'>🎯</div>
            <h4 className='font-bold !text-blue-300'>Modern Stack</h4>
            <p className='text-sm text-gray-300'>Built for today</p>
          </div>
        </div>

        <div className='text-center space-y-4'>
          <p className='text-2xl text-green-400 font-bold'>Stop Waiting. Start Building. ⚡</p>
          <p className='text-lg text-gray-300'>Your productivity will skyrocket! 🚀</p>
          <div className='text-6xl mt-4'>⚡&nbsp;💨&nbsp;🎉</div>
        </div>
      </div>

      <SideNotes>
        The React ecosystem is moving to Vite. Major frameworks like Nuxt, SvelteKit, and now React itself recommend
        Vite-based solutions. Don't get left behind with slow tooling. Make the switch today and experience the
        difference that instant feedback makes in your development workflow!
      </SideNotes>
    </Slide>
  );
}
