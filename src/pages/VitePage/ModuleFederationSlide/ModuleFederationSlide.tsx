import CodeBlock from '../../../components/CodeBlock';
import SideNote from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function ModuleFederationSlide() {
  const federationConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'employee',
      filename: 'remoteEntry.js',
      exposes: {
        './EmployeeMF': './src/exposes/ExposedEmployeeClient.tsx',
        './EmployeeSettingsMF': './src/exposes/EmployeeSettingsMF/index.tsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
        redux: { singleton: true },
        'react-redux': { singleton: true },
      },
    }),
  ],
  server: {
    port: 3001,
    origin: 'http://localhost:3001',
  },
  build: {
    modulePreload: false,
    target: 'esnext',
  },
});`;

  return (
    <Slide>
      <h2 className='!text-purple-400'>🔗 Module Federation</h2>

      <div className='r-stretch flex flex-col justify-between'>
        <CodeBlock highlightLineNumbers='3|8-23' language='typescript'>
          {federationConfig}
        </CodeBlock>
      </div>

      <SideNote>
        Module Federation in Vite enables true micro-frontend architectures. You can expose components from one app and
        consume them in another, all while maintaining fast development speeds. The @module-federation/vite plugin makes
        setup straightforward, and shared dependencies ensure libraries like React are loaded only once across all
        federated modules. This is perfect for large organizations with multiple teams working on different parts of the
        same product.
      </SideNote>
    </Slide>
  );
}
