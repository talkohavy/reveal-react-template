import Code from '../../../components/PresentationSlides/Code';
import Slide from '../../../components/PresentationSlides/Slide';

export default function DeleteCodeFromApiMiddleware() {
  return (
    <Slide>
      <h3>What would a refactor look like?</h3>

      <p className='text-left text-sm' style={{ marginLeft: 49 }}>
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
    </Slide>
  );
}
