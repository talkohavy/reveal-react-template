import PresentationSlides from '../../components/Presentation';
import BenefitsOfPlanningSlide from './BenefitsOfPlanningSlide';
import CallToActionSlide from './CallToActionSlide';
import DemoSlide from './DemoSlide';
import OpeningSlide from './OpeningSlide';
import PlanningVsChaosSlide from './PlanningVsChaosSlide';
import ProblemStatementSlide from './ProblemStatementSlide';
import SolutionExplainedSlide from './SolutionExplainedSlide';
import TheThreeLineSlide from './TheThreeLineSlide';

export default function AIPlanningPage() {
  return (
    <PresentationSlides>
      <OpeningSlide />

      <ProblemStatementSlide />

      <SolutionExplainedSlide />

      <TheThreeLineSlide />

      <DemoSlide />

      <BenefitsOfPlanningSlide />

      <PlanningVsChaosSlide />

      <CallToActionSlide />
    </PresentationSlides>
  );
}
