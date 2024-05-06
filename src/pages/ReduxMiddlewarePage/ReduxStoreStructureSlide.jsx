import ObjectWrapper from '../../components/PresentationSlides/ObjectWrapper';
import SideNotes from '../../components/PresentationSlides/SideNotes';
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
          <li>insights (new!)</li>
          <li>api</li>
        </ul>

        <ObjectWrapper position='rightCenter'>
          <img src={folderStructureImage} alt='folder structure' className='h-lg' style={{ marginTop: 160 }} />
        </ObjectWrapper>
      </div>

      <SideNotes>
        So, when I first looked at the app I said "alright what do we got", we have a UI part, which currently has only
        2 parts: the isChatbotSidebarOpen, and an action that gives focus to the ChatInput. A ChatManager that handles
        everything related to chatting with the AI. Creating a new chat, sending a message to an existing chat, liking
        or disliking an AI's response, deleting a chat, and more. Let's skip the insights slice, and talk about the API
        slice. The API is only place in my entire application, which is allowed to send async requests designated to the
        server. And we will see that in the coming slides.
        <br />
        <br />
        From image here, that shows every slice, we can learn about some of the system's conventions: Every slice can
        have an actions file, a reducer file, selectors of course, and..... possibly, if needed, a middleware file - to
        handle logic, for this part of the application.
      </SideNotes>
    </Slide>
  );
}
