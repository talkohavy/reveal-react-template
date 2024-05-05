import PresentationSlides from '../../components/PresentationSlides';
import FlowTestingSlide from './FlowTestingSlide';
import MiddlewareProsAndConsSlide from './MiddlewareProsAndConsSlide';
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

      <FlowTestingSlide />
    </PresentationSlides>
  );
}
