import CodeBlock from '../../../components/CodeBlock';
import SideNote from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function MigrationGuideSlide() {
  const migrationSteps = `# Create a new Vite project
npm create vite@latest my-app -- --template react-ts

# Or migrate existing project:
npm install vite @vitejs/plugin-react -D

# Update package.json scripts:
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

# Move index.html to root
# Add type="module" to script tag
# Update imports from '%PUBLIC_URL%' to relative paths`;

  return (
    <Slide>
      <h2 className='!text-cyan-400'>🔄 Migrating from CRA</h2>

      <div className='r-stretch flex flex-col justify-between'>
        <div className='text-center mb-4'>
          <p className='text-xl'>It's easier than you think!</p>
        </div>

        <CodeBlock language='bash' className='text-base'>
          {migrationSteps}
        </CodeBlock>

        <div className='grid grid-cols-3 gap-4 text-center mt-4'>
          <div className='bg-gray-800/50 rounded-lg p-3'>
            <div className='text-2xl mb-1'>📦</div>
            <p className='text-sm font-bold'>Install Vite</p>
          </div>
          <div className='bg-gray-800/50 rounded-lg p-3'>
            <div className='text-2xl mb-1'>⚙️</div>
            <p className='text-sm font-bold'>Update Config</p>
          </div>
          <div className='bg-gray-800/50 rounded-lg p-3'>
            <div className='text-2xl mb-1'>🚀</div>
            <p className='text-sm font-bold'>Launch!</p>
          </div>
        </div>
      </div>

      <SideNote>
        Migration is straightforward. For new projects, just use the Vite scaffolding tool. For existing projects, you
        mainly need to install Vite, update your scripts, and move your index.html. Most CRA projects can be migrated in
        under an hour!
      </SideNote>
    </Slide>
  );
}
