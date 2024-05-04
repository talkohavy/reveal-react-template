import PresentationSlides from '../../components/PresentationSlides';
import ReduxActionFlowSlide from './ReduxActionFlowSlide';
import ReduxOpeningSlide from './ReduxOpeningSlide';
import ReduxStoreStructureSlide from './ReduxStoreStructureSlide';

export default function ReduxExamplePage() {
  return (
    <PresentationSlides>
      <ReduxOpeningSlide />

      <ReduxStoreStructureSlide />

      <ReduxActionFlowSlide />
    </PresentationSlides>
  );
}
