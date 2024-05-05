import PresentationSlides from '../../components/PresentationSlides';
import DecoupleRequestAndResponseSlide from './DecoupleRequestAndResponseSlide';
import LetsCodeAUnitTestSlide from './LetsCodeAUnitTestSlide';
import MiddlewareProsAndConsSlide from './MiddlewareProsAndConsSlide';
import MockApiMiddlewareSlide from './MockApiMiddlewareSlide';
import ReducedReadabilitySlide from './ReducedReadabilitySlide';
import ReduxActionFlowSlide from './ReduxActionFlowSlide';
import ReduxOpeningSlide from './ReduxOpeningSlide';
import ReduxStoreStructureSlide from './ReduxStoreStructureSlide';
import WhatWouldARefactorLookLikeSlide from './WhatWouldARefactorLookLikeSlide';

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

      <LetsCodeAUnitTestSlide />

      <WhatWouldARefactorLookLikeSlide />
    </PresentationSlides>
  );
}
