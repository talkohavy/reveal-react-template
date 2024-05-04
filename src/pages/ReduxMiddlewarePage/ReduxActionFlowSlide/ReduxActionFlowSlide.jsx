import TargetChatManagerRequestFlow from './TargetChatManagerRequestFlow';
import TargetReducerFlow from './TargetReducerFlow';

export default function ReduxActionFlowSlide() {
  return (
    <>
      <TargetReducerFlow />
      <TargetChatManagerRequestFlow />
    </>
  );
}
