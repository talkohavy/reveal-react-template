import type { PropsWithChildren } from 'react';

export default function SideNote(props: PropsWithChildren) {
  const { children } = props;

  return <aside className='notes'>{children}</aside>;
}
