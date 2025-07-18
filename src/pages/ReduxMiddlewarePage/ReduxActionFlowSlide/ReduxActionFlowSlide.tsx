import TargetChatManagerRequestFlow from './TargetChatManagerRequestFlow';
import TargetChatManagerSuccessFlow from './TargetChatManagerSuccessFlow';
import TargetReducerFlow from './TargetReducerFlow';

export default function ReduxActionFlowSlide() {
  return (
    <>
      <TargetReducerFlow />
      <TargetChatManagerRequestFlow />
      <TargetChatManagerSuccessFlow />
    </>
  );
}
