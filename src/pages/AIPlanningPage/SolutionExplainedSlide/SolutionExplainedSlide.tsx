import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function SolutionExplainedSlide() {
  return (
    <Slide>
      <h2 className='!font-bold !text-green-400'>💡 The Solution</h2>

      <div className='r-stretch flex flex-col justify-center'>
        <div className='text-center mb-8'>
          <p className='!text-4xl text-blue-300 mb-8'>Give AI the context it needs to be truly helpful</p>
        </div>

        <div className='flex justify-around items-start mb-12'>
          <div className='text-center max-w-xs'>
            <div className='text-6xl mb-4'>📋</div>
            <h3 className='!text-4xl font-bold text-yellow-300 mb-2'>PLANNING.md</h3>
            <p className='text-xl'>High-level direction, scope, tech stack, architecture</p>
          </div>

          <div className='text-4xl text-blue-400'>➕</div>

          <div className='text-center max-w-xs'>
            <div className='text-6xl mb-4'>✅</div>
            <h3 className='!text-4xl font-bold text-yellow-300 mb-2'>TASKS.md</h3>
            <p className='text-xl'>Initial tasks to knock out for the project</p>
          </div>

          <div className='text-4xl text-blue-400'>=</div>

          <div className='text-center max-w-xs'>
            <div className='text-6xl mb-4'>🚀</div>
            <h3 className='!text-4xl font-bold text-green-300 mb-2'>Success!</h3>
            <p className='text-xl'>Structured, focused, productive AI collaboration</p>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-4xl text-gray-300 italic'>✨ Two files, infinite possibilities ✨</p>
        </div>
      </div>

      <SideNotes>
        The solution is surprisingly simple: provide structure. By creating these two foundational documents, you're
        giving the AI a clear understanding of what you're building and what needs to be done. It's like the difference
        between asking someone to "help with stuff" versus giving them a detailed blueprint and task list.
      </SideNotes>
    </Slide>
  );
}
