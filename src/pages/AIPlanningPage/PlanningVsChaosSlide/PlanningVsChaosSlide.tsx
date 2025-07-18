import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function PlanningVsChaosSlide() {
  return (
    <Slide>
      <h2 className='!text-5xl font-bold mb-12'>⚔️ Planning vs Chaos</h2>

      <div className='r-stretch'>
        <div className='r-hstack'>
          {/* Chaos Side */}
          <div className='p-6 bg-transparent'>
            <div className='bg-red-900/20 rounded-lg p-6 border-2 border-red-500'>
              <h3 className='!text-2xl font-bold text-red-400 mb-6 text-center'>😵‍💫 Without Planning</h3>

              <div className='text-base'>
                <div className='flex items-center !space-x-2'>
                  <span className='text-red-400'>❌</span>
                  <p>"Can you help me code something?"</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-red-400'>❌</span>
                  <p>"What's the best way to do X?"</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-red-400'>❌</span>
                  <p>"I tried what you said but it doesn't work"</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-red-400'>❌</span>
                  <p>"Wait, let me explain my whole project again..."</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-red-400'>❌</span>
                  <p>"Actually, I'm using React, not Vue"</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-red-400'>❌</span>
                  <p>"Never mind, I'll just Google it"</p>
                </div>
              </div>

              <div className='mt-6 text-center'>
                <p className='text-3xl text-red-300 font-bold'>Result: Frustration & Wasted Time 😤</p>
              </div>
            </div>
          </div>

          {/* Planning Side */}
          <div className='p-6 bg-transparent'>
            <div className='bg-green-900/20 rounded-lg p-6 border-2 border-green-500'>
              <h3 className='!text-2xl font-bold text-green-400 mb-6 text-center'>🎯 With Planning</h3>

              <div className='text-sm'>
                <div className='flex items-center !space-x-2'>
                  <span className='text-green-400'>✅</span>
                  <p>"Looking at my PLANNING.md, can you suggest..."</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-green-400'>✅</span>
                  <p>"Based on my TypeScript/React setup..."</p>
                </div>

                <div className='flex items-center justify-start !space-x-2'>
                  <span className='text-green-400'>✅</span>
                  <p className='text-left'>"Here's my current TASKS.md, what should I prioritize?"</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-green-400'>✅</span>
                  <p>"This aligns perfectly with your architecture!"</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-green-400'>✅</span>
                  <p>"Let me update your tasks with what we discussed"</p>
                </div>

                <div className='flex items-center !space-x-2'>
                  <span className='text-green-400'>✅</span>
                  <p>"Ship it! 🚀"</p>
                </div>
              </div>

              <div className='mt-6 text-center'>
                <p className='text-3xl text-green-300 font-bold'>Result: Progress & Success! 🎉</p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-2xl text-blue-300'>🤔 Which conversation would you rather have?</p>
        </div>
      </div>

      <SideNotes>
        The contrast is stark when you see it side by side. Without planning, every AI conversation starts from zero,
        leading to generic advice and constant context switching. With planning, every conversation builds on solid
        foundations, leading to specific, actionable guidance that actually moves your project forward. It's the
        difference between having a confused intern and a senior consultant who knows your business.
      </SideNotes>
    </Slide>
  );
}
