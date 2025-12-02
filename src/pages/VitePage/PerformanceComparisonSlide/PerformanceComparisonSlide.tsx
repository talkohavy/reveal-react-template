import SideNote from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function PerformanceComparisonSlide() {
  return (
    <Slide>
      <h2 className='!text-blue-400'>📊 Performance Comparison</h2>

      <div className='r-stretch flex flex-col justify-center'>
        <div className='grid grid-cols-2 gap-8 mb-8'>
          <div className='bg-red-900/30 rounded-lg p-6 border-2 border-red-500'>
            <h3 className='!text-3xl font-bold !text-red-400 mb-4'>Create React App</h3>
            <div className='space-y-4 text-left'>
              <div>
                <p className='text-sm text-gray-400'>Cold Start</p>
                <p className='text-3xl font-bold'>~30-60s</p>
              </div>
              <div>
                <p className='text-sm text-gray-400'>HMR Update</p>
                <p className='text-3xl font-bold'>~2-5s</p>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Build Time</p>
                <p className='text-3xl font-bold'>~2-5 min</p>
              </div>
            </div>
          </div>

          <div className='bg-green-900/30 rounded-lg p-6 border-2 border-green-500'>
            <h3 className='!text-3xl font-bold !text-green-400 mb-4'>Vite</h3>
            <div className='space-y-4 text-left'>
              <div>
                <p className='text-sm text-gray-400'>Cold Start</p>
                <p className='text-3xl font-bold !text-green-300'>~1-2s ⚡</p>
              </div>
              <div>
                <p className='text-sm text-gray-400'>HMR Update</p>
                <p className='text-3xl font-bold !text-green-300'>~50ms ⚡</p>
              </div>
              <div>
                <p className='text-sm text-gray-400'>Build Time</p>
                <p className='text-3xl font-bold !text-green-300'>~30-60s ⚡</p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-2xl !text-yellow-300 font-bold'>That's 10-30x faster! 🚀</p>
          <p className='text-gray-400 italic mt-2'>*Times may vary based on project size</p>
        </div>
      </div>

      <SideNote>
        The performance difference is dramatic. Vite's dev server starts almost instantly, and hot module replacement
        happens in milliseconds. As your project grows, CRA gets slower, but Vite stays fast because it only processes
        the files you're actually using.
      </SideNote>
    </Slide>
  );
}
