import SideNote from '../../../components/SideNote';
import Slide from '../../../components/Slide';

const problemsArr = [
  {
    emoji: '🐌',
    description: 'Slow cold start - bundling everything before you can see anything',
  },
  {
    emoji: '⏳',
    description: 'HMR (Hot Module Replacement) gets slower as project grows',
  },
  {
    emoji: '🔒',
    description: 'Create React App is officially deprecated (no more updates)',
  },
  {
    emoji: '📦',
    description: 'Webpack configuration is hidden and hard to customize (Craco? Seriously?)',
  },
  {
    emoji: '🦖',
    description: "Built on older tooling that doesn't leverage modern standards",
  },
];

export default function ProblemWithCRASlide() {
  return (
    <Slide>
      <h2 className='!text-red-400'>😓 The Problem with CRA</h2>

      <div className='r-stretch'>
        <div className='text-left text-2xl'>
          <h3 className='mb-6'>Why developers are moving away from Create React App:</h3>

          {problemsArr.map((problem, index) => (
            <div key={index} className='flex items-center justify-start gap-4 mb-4'>
              <div className='text-4xl'>{problem.emoji}</div>

              <p>{problem.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <p className='text-gray-400 italic'>Time for something better...</p>
        </div>
      </div>

      <SideNote>
        Create React App served us well for years, but it's showing its age. The React team itself no longer recommends
        it, and the development experience has become painful compared to modern alternatives. Slow start times and
        sluggish hot reloading have developers waiting more than coding.
      </SideNote>
    </Slide>
  );
}
