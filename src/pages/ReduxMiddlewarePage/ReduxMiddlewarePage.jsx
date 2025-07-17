import PresentationSlides from '../../components/Presentation';
import DecoupleRequestAndResponseSlide from './DecoupleRequestAndResponseSlide';
import LetsCodeAUnitTestSlide from './LetsCodeAUnitTestSlide';
import MiddlewareProsAndConsSlide from './MiddlewareProsAndConsSlide';
import MockApiMiddlewareSlide from './MockApiMiddlewareSlide';
import OpeningSlide from './OpeningSlide';
import ReducedReadabilitySlide from './ReducedReadabilitySlide';
import ReduxActionFlowSlide from './ReduxActionFlowSlide';
import ReduxStoreStructureSlide from './ReduxStoreStructureSlide';
import RefactorProsAndConsSlide from './RefactorProsAndConsSlide';
import WhatWouldARefactorLookLikeSlide from './WhatWouldARefactorLookLikeSlide';

export default function ReduxExamplePage() {
  return (
    <PresentationSlides>
      <OpeningSlide />

      <ReduxStoreStructureSlide />

      <ReduxActionFlowSlide />

      <MiddlewareProsAndConsSlide />

      <ReducedReadabilitySlide />

      <DecoupleRequestAndResponseSlide />

      <MockApiMiddlewareSlide />

      <LetsCodeAUnitTestSlide />

      <WhatWouldARefactorLookLikeSlide />

      <RefactorProsAndConsSlide />
    </PresentationSlides>
  );
}
