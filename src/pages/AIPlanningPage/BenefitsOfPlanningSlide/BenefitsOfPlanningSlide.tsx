import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function BenefitsOfPlanningSlide() {
  return (
    <Slide data-visibility='hidden'>
      <h2 className='text-5xl font-bold mb-12 text-green-400'>🚀 Why AI Planning Works</h2>

      <div className='r-stretch flex flex-col justify-center'>
        <div className='grid grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <div className='flex items-start space-x-4'>
              <div className='text-4xl'>🎯</div>
              <div>
                <h3 className='text-xl font-bold text-yellow-300'>Laser Focus</h3>
                <p className='text-gray-300'>AI understands your goals and stays on track</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='text-4xl'>⚡</div>
              <div>
                <h3 className='text-xl font-bold text-yellow-300'>Speed</h3>
                <p className='text-gray-300'>No more re-explaining context in every conversation</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='text-4xl'>🧠</div>
              <div>
                <h3 className='text-xl font-bold text-yellow-300'>Smart Suggestions</h3>
                <p className='text-gray-300'>AI provides relevant recommendations based on your stack</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='text-4xl'>🔄</div>
              <div>
                <h3 className='text-xl font-bold text-yellow-300'>Consistency</h3>
                <p className='text-gray-300'>Every conversation builds on the previous one</p>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='flex items-start space-x-4'>
              <div className='text-4xl'>📈</div>
              <div>
                <h3 className='text-xl font-bold text-yellow-300'>Progress Tracking</h3>
                <p className='text-gray-300'>Clear visibility into what's done and what's next</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='text-4xl'>🤝</div>
              <div>
                <h3 className='text-xl font-bold text-yellow-300'>Better Collaboration</h3>
                <p className='text-gray-300'>AI becomes your thinking partner, not just a tool</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='text-4xl'>🏆</div>
              <div>
                <h3 className='text-xl font-bold text-yellow-300'>Higher Quality</h3>
                <p className='text-gray-300'>More thoughtful solutions aligned with your architecture</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='text-4xl'>😌</div>
              <div>
                <h3 className='text-xl font-bold text-yellow-300'>Less Stress</h3>
                <p className='text-gray-300'>No more feeling lost or overwhelmed</p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-2xl text-blue-300 italic'>"From scattered conversations to strategic collaboration" ✨</p>
        </div>
      </div>

      <SideNotes>
        These benefits compound over time. Each well-structured conversation builds on the previous ones, creating a
        knowledge base that makes the AI increasingly helpful. It's like having a teammate who never forgets what you
        told them and always keeps your project's context in mind. The initial investment in creating these documents
        pays dividends throughout the entire project lifecycle.
      </SideNotes>
    </Slide>
  );
}
