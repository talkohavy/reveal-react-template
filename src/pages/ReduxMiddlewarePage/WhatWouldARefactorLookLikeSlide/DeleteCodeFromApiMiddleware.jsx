import Code from '../../../components/PresentationSlides/Code';
import SideNotes from '../../../components/PresentationSlides/SideNote';
import Slide from '../../../components/PresentationSlides/Slide';

export default function DeleteCodeFromApiMiddleware() {
  return (
    <Slide>
      <h3>What would a refactor look like?</h3>

      <p className='text-left' style={{ marginLeft: 49 }}>
        <i>filename: api/middleware.ts</i>
      </p>

      <Code highlightLineNumbers='8,11-13' className='r-stretch'>
        {String.raw`import { chatbotDAL } from '@src/dal/chat/chatBotApiDAL';
import { createMiddleware } from '../../helpers/createMiddleware';
import { apiRequestFlow, name } from './actions';

const apiMiddleware = createMiddleware({
    name,
    handleAction: ({ action, dispatch }) => {
        if (apiRequestFlow.match(action)) {
            const { dalMethodName, dalMethodProps, onSuccess, onFailure } = action.payload;

            chatbotDAL[dalMethodName](dalMethodProps)
                .then((response) => dispatch(onSuccess({ response })))
                .catch((error) => dispatch(onFailure({ error: error.message })));
        }
    },
});

export { apiMiddleware };`}
      </Code>

      <SideNotes>
        And the api middleware will be removed completely.
        <br />
        <br />
        One word about the api middleware - the api middleware to me is like node_internals. I never touch it, it
        doesn't need modifications. It's just - Send a request, get back a response.
      </SideNotes>
    </Slide>
  );
}
