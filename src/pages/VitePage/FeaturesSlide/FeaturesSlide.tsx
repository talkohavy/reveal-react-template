import CodeBlock from '../../../components/CodeBlock';
import SideNote from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function FeaturesSlide() {
  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});`;

  return (
    <Slide>
      <h2 className='!text-purple-400'>🎨 Vite Features</h2>

      <div className='r-stretch flex flex-col justify-between'>
        <div className='grid grid-cols-2 gap-4 text-left mb-6'>
          <div className='space-y-3 text-2xl'>
            <div>✅ TypeScript out of the box</div>
            <div>✅ CSS Modules & Preprocessors</div>
            <div>✅ JSX & TSX support</div>
          </div>
          <div className='space-y-3 text-2xl'>
            <div>✅ Environment variables</div>
            <div>✅ Asset handling</div>
            <div>✅ Plugin ecosystem</div>
          </div>
        </div>

        <div>
          <h3 className='!text-xl mb-2'>Simple Configuration:</h3>
          <CodeBlock language='typescript' className='text-sm'>
            {viteConfig}
          </CodeBlock>
        </div>
      </div>

      <SideNote>
        Vite comes with everything you need for modern React development. The configuration is straightforward and
        minimal. Unlike CRA where you need to eject to customize webpack, Vite's config is simple and accessible from
        day one.
      </SideNote>
    </Slide>
  );
}
