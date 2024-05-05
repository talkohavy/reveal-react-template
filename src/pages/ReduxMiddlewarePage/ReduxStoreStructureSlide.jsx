import ObjectWrapper from '../../components/PresentationSlides/ObjectWrapper';
import Slide from '../../components/PresentationSlides/Slide';
import folderStructureImage from './folder-structure.png';

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

        <ObjectWrapper position='rightCenter'>
          <img src={folderStructureImage} alt='folder structure' className='h-lg' style={{ marginTop: 160 }} />
        </ObjectWrapper>
      </div>
    </Slide>
  );
}
