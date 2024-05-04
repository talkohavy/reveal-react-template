import Slide from '../../components/PresentationSlides/Slide';

export default function ReduxStoreStructureSlide() {
  return (
    <Slide>
      <h1>Store Structure</h1>

      <div className='r-stretch p-6 text-left'>
        <p>There are 4 slices to the Chatbot project:</p>

        <ul style={{ color: 'blue' }}>
          <li>ui</li>
          <li>chatManager</li>
          <li>insights</li>
          <li>api</li>
        </ul>
      </div>
    </Slide>
  );
}
