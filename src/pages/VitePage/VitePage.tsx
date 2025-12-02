import PresentationSlides from '../../components/Presentation';
import CallToActionSlide from './CallToActionSlide';
import FeaturesSlide from './FeaturesSlide';
import MigrationGuideSlide from './MigrationGuideSlide';
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

      <MigrationGuideSlide />

      <CallToActionSlide />
    </PresentationSlides>
  );
}
