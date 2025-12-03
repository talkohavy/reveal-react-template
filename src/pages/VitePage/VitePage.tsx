import PresentationSlides from '../../components/Presentation';
import CallToActionSlide from './CallToActionSlide';
import FeaturesSlide from './FeaturesSlide';
import ModuleFederationSlide from './ModuleFederationSlide';
import OpeningSlide from './OpeningSlide';
import PerformanceComparisonSlide from './PerformanceComparisonSlide';
import ProblemWithCRASlide from './ProblemWithCRASlide';
import WhyViteSlide from './WhyViteSlide';

export default function VitePage() {
  return (
    <PresentationSlides>
      <OpeningSlide />

      <ProblemWithCRASlide />

      <WhyViteSlide />

      <PerformanceComparisonSlide />

      <FeaturesSlide />

      <ModuleFederationSlide />

      <CallToActionSlide />
    </PresentationSlides>
  );
}
