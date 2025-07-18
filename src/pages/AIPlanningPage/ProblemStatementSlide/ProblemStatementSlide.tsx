import SideNote from '../../../components/SideNote';
import Slide from '../../../components/Slide';

const topicArr = [
  {
    emoji: '🌪️',
    title: 'Chaotic AI Conversations',
    description: 'Jumping between ideas without structure',
  },
  {
    emoji: '🔄',
    title: 'Repeated Context',
    description: 'AI keeps asking the same questions about your project',
  },
  {
    emoji: '🎯',
    title: 'Lost Focus',
    description: 'Starting projects but never finishing them',
  },
  {
    emoji: '🧩',
    title: 'Missing the Big Picture',
    description: "AI can't help effectively without understanding your goals",
  },
];

export default function ProblemStatementSlide() {
  return (
    <Slide>
      <h2 className='!text-red-400'>😵‍💫 The Problem</h2>

      <div className='r-stretch'>
        <div className='text-left text-3xl'>
          {topicArr.map((topic) => (
            <div key={topic.title} className='flex items-center justify-start gap-4'>
              <div>{topic.emoji}</div>

              <p>
                <strong>{topic.title}:</strong> {topic.description}
              </p>
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
