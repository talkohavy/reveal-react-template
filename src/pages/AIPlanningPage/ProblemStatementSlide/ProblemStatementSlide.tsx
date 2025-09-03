import SideNote from '../../../components/SideNote';
import Slide from '../../../components/Slide';

const topicArr = [
  {
    emoji: '⚠️',
    description: '"oops, the file seems corrupted, let me quickly create another one"',
  },
  {
    emoji: '🤔',
    description: `"Let's see what's going on... hmm... the file seems empty"`,
  },
  {
    emoji: '🤪',
    description: "AI is doing something you didn't want it to do",
  },
  {
    emoji: '🔀',
    description: 'AI find an unrelated issue, leaves the main goal, and starts treating the unrelated issue',
  },
  {
    emoji: '📈',
    description: 'Over 25 new files were either created or modified',
  },
];

export default function ProblemStatementSlide() {
  return (
    <Slide>
      <h2 className='!text-red-400'>😵‍💫 The Problem</h2>

      <div className='r-stretch'>
        <div className='text-left text-3xl'>
          <h2>When the task is big:</h2>

          {topicArr.map((topic, index) => (
            <div key={index} className='flex items-center justify-start gap-4'>
              <div>{topic.emoji}</div>

              <p>{topic.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <p className='text-gray-400 italic'>Sound familiar? 🤔</p>
        </div>
      </div>

      <SideNote>
        We've all been there - starting conversations with AI assistants that feel scattered and inefficient. Without
        proper context and structure, even the most powerful AI becomes just a very expensive magic 8-ball. The problem
        isn't the AI's capability - it's the lack of shared understanding about what we're trying to achieve.
      </SideNote>
    </Slide>
  );
}
