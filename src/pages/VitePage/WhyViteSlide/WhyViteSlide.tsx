import SideNote from '../../../components/SideNote';
import Slide from '../../../components/Slide';

const benefitsArr = [
  {
    emoji: '⚡',
    title: 'Lightning Fast',
    description: 'Instant server start and blazing fast HMR',
  },
  {
    emoji: '🎯',
    title: 'Native ESM',
    description: 'Leverages native ES modules in the browser',
  },
  {
    emoji: '🔧',
    title: 'Simple Config',
    description: 'Minimal configuration with sensible defaults',
  },
  {
    emoji: '🚀',
    title: 'Optimized Builds',
    description: 'Production builds powered by Rollup',
  },
  {
    emoji: '🔌',
    title: 'Rich Ecosystem',
    description: 'Extensive plugin system and framework support',
  },
];

export default function WhyViteSlide() {
  return (
    <Slide slideConfig={{ dataBackgroundColor: '#1e1e2e' }}>
      <h2 className='!text-green-400'>⚡ Why Vite?</h2>

      <div className='r-stretch'>
        <div className='grid grid-cols-1 gap-4 text-left'>
          {benefitsArr.map((benefit, index) => (
            <div key={index} className='bg-gray-800/50 rounded-lg py-2 px-6'>
              <div className='flex items-center gap-y-2 gap-x-6'>
                <div className='text-5xl'>{benefit.emoji}</div>

                <div>
                  <h3 className='!text-2xl font-bold !text-yellow-300'>{benefit.title}</h3>

                  <p className='text-lg text-gray-300'>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SideNote>
        Vite takes a completely different approach to development. Instead of bundling everything upfront, it serves
        your source files as native ES modules. The browser does the work of resolving imports, and Vite only transforms
        files on-demand. This means instant server start regardless of project size.
      </SideNote>
    </Slide>
  );
}
