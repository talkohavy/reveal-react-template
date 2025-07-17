import AfterRefactor from './AfterRefactor';
import DeleteCodeFromApiMiddleware from './DeleteCodeFromApiMiddleware';
import DeleteCodeFromChatManagerMiddleware from './DeleteCodeFromChatManagerMiddleware';
import RemoveDispatchFromApp from './RemoveDispatchFromApp';

export default function WhatWouldARefactorLookLikeSlide() {
  return (
    <>
      <RemoveDispatchFromApp />
      <DeleteCodeFromChatManagerMiddleware />
      <DeleteCodeFromApiMiddleware />
      <AfterRefactor />
    </>
  );
}
