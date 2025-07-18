import CodeBlock from '../../../components/CodeBlock';
import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function CallToActionSlide() {
  const theChallenge = `Create a PLANNING.md and a TASKS.md file.
PLANNING.md - high level direction, scope, tech etc.
TASKS.md - initial tasks to knock out for the project.`;

  return (
    <Slide>
      <h2 className='!text-5xl font-bold !mb-12 !text-blue-400'>🚀 Your Next Steps</h2>

      <div className='r-stretch flex flex-col justify-center'>
        <div className='text-center mb-8'>
          <h3 className='!text-3xl font-bold !text-yellow-300'>Ready to Transform Your AI Collaboration?</h3>
          <p className='text-xl text-gray-300'>Start your next project with these three magic lines:</p>
        </div>

        <div className='mb-8'>
          <CodeBlock language='markdown' className='text-lg'>
            {theChallenge}
          </CodeBlock>
        </div>

        <div className='grid grid-cols-3 gap-6 text-center mb-8'>
          <div className='bg-gray-800/50 rounded-lg p-4'>
            <div className='text-3xl mb-2'>1️⃣</div>
            <h4 className='font-bold !text-green-300'>Copy</h4>
            <p className='text-sm text-gray-300'>Copy those three lines</p>
          </div>

          <div className='bg-gray-800/50 rounded-lg p-4'>
            <div className='text-3xl mb-2'>2️⃣</div>
            <h4 className='font-bold !text-yellow-300'>Paste</h4>
            <p className='text-sm text-gray-300'>Paste into any AI chat</p>
          </div>

          <div className='bg-gray-800/50 rounded-lg p-4'>
            <div className='text-3xl mb-2'>3️⃣</div>
            <h4 className='font-bold !text-blue-300'>Profit</h4>
            <p className='text-sm text-gray-300'>Watch the magic happen!</p>
          </div>
        </div>

        <div className='text-center space-y-4'>
          <p className='text-2xl text-green-400 font-bold'>Stop Fighting Chaos. Start Building Success. ✨</p>
          <p className='text-lg text-gray-300'>Your future self will thank you! 🙏</p>
          <div className='text-6xl mt-4'>🎯&nbsp;📋&nbsp;🚀</div>
        </div>
      </div>

      <SideNotes>
        This is your call to action! The beauty of this approach is its simplicity - you can literally start using it on
        your very next AI conversation. No special tools, no complex methodologies, just three lines that unlock the
        full potential of AI collaboration. Try it once, and you'll never go back to chaotic AI conversations again. The
        difference is transformational!
      </SideNotes>
    </Slide>
  );
}
