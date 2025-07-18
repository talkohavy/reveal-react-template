import CodeBlock from '../../../components/CodeBlock';
import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function TheThreeLineSlide() {
  const magicLines = `Create a PLANNING.md and a TASKS.md file.
PLANNING.md - high level direction, scope, tech etc.
TASKS.md - initial tasks to knock out for the project.`;

  return (
    <Slide>
      <h2 className='text-5xl font-bold mb-12'>✨ The Three Magic Lines</h2>

      <div className='r-stretch flex flex-col justify-center'>
        <div className='text-center mb-8'>
          <p className='text-2xl text-blue-300 mb-8'>Just copy-paste these lines to any AI assistant:</p>
        </div>

        <div className='mb-12'>
          <CodeBlock language='markdown' className='text-lg'>
            {magicLines}
          </CodeBlock>
        </div>

        <div className='grid grid-cols-3 gap-8 text-center'>
          <div>
            <div className='mb-2'>🎯</div>
            <h3 className='font-bold text-yellow-300' style={{ fontSize: '36px' }}>
              Clear Intent
            </h3>
            <p className='text-sm text-gray-300' style={{ fontSize: '24px' }}>
              Tells AI exactly what to create
            </p>
          </div>

          <div>
            <div className='mb-2'>🏗️</div>
            <h3 className='font-bold text-yellow-300' style={{ fontSize: '36px' }}>
              Structure
            </h3>
            <p className='text-sm text-gray-300' style={{ fontSize: '24px' }}>
              Defines the framework for success
            </p>
          </div>

          <div>
            <div className='mb-2'>⚡</div>
            <h3 className='font-bold text-yellow-300' style={{ fontSize: '36px' }}>
              Instant Results
            </h3>
            <p className='text-sm text-gray-300' style={{ fontSize: '24px' }}>
              AI immediately understands your needs
            </p>
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-green-400 italic' style={{ fontSize: '18px' }}>
            Three lines. Two files. Unlimited potential. 🚀
          </p>
        </div>
      </div>

      <SideNotes>
        These three lines are like a magic spell for AI productivity. They're specific, actionable, and set up a
        framework that any AI can understand and execute. The beauty is in their simplicity - you don't need to explain
        complex project management methodologies or architectural patterns. The AI will figure out the details based on
        your specific project context.
      </SideNotes>
    </Slide>
  );
}
