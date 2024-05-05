import PresentationSlides from '../../components/PresentationSlides';
import DecoupleRequestAndResponseSlide from './DecoupleRequestAndResponseSlide';
import MiddlewareProsAndConsSlide from './MiddlewareProsAndConsSlide';
import MockApiMiddlewareSlide from './MockApiMiddlewareSlide';
import ReducedReadabilitySlide from './ReducedReadabilitySlide';
import ReduxActionFlowSlide from './ReduxActionFlowSlide';
import ReduxOpeningSlide from './ReduxOpeningSlide';
import ReduxStoreStructureSlide from './ReduxStoreStructureSlide';

export default function ReduxExamplePage() {
  return (
    <PresentationSlides>
      <ReduxOpeningSlide />

      <ReduxStoreStructureSlide />

      <ReduxActionFlowSlide />

      <MiddlewareProsAndConsSlide />

      <ReducedReadabilitySlide />

      <DecoupleRequestAndResponseSlide />

      <MockApiMiddlewareSlide />
    </PresentationSlides>
  );
}
