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
    <Slide
      slideConfig={{
        rStack: true,
      }}
    >
      <h2 className='font-bold mb-12 text-red-400'>😵‍💫 The Problem</h2>

      <div className='text-left'>
        {topicArr.map((topic) => (
          <div key={topic.title} className='flex items-start items-center w-full bg-red-500' style={{ fontSize: 36 }}>
            <p>{topic.emoji}</p>
            <p className='text-transparent'>---</p>

            <p>
              <strong>{topic.title}:</strong> {topic.description}
            </p>
          </div>
        ))}
      </div>

      <div className='text-center'>
        <p className='text-2xl text-gray-400 italic'>Sound familiar? 🤔</p>
      </div>

      <SideNote>
        We've all been there - starting conversations with AI assistants that feel scattered and inefficient. Without
        proper context and structure, even the most powerful AI becomes just a very expensive magic 8-ball. The problem
        isn't the AI's capability - it's the lack of shared understanding about what we're trying to achieve.
      </SideNote>
    </Slide>
  );
}
