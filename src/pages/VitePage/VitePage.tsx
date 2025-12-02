import PresentationSlides from '../../components/Presentation';
import CallToActionSlide from './CallToActionSlide';
import FeaturesSlide from './FeaturesSlide';
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

      <CallToActionSlide />
    </PresentationSlides>
  );
}
