import { REVEAL_CLASSES } from '../../../common/constants';
import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function DemoSlide() {
  return (
    <Slide>
      <h2 style={{ fontWeight: 'bold', fontSize: '48px' }}>🎬 Real World Example</h2>

      <img
        src='/real-world-example.png'
        alt='Real World Example'
        {...{ [REVEAL_CLASSES.dataPreviewImage]: '/real-world-example.png' }}
      />

      <SideNotes>
        Here's a real example from this very project! Notice how the PLANNING.md gives the AI complete context about the
        architecture, tech stack, and design principles. The TASKS.md shows exactly what's been done and what needs to
        happen next. With this foundation, the AI can give much more targeted and helpful suggestions because it
        understands both the big picture and the current state.
      </SideNotes>
    </Slide>
  );
}
