import { Link } from 'react-router-dom';
import clsx from 'clsx';

type SideBarLinkItem = {
  to: string;
  text: string;
  isActive?: boolean;
};

export default function SideBarLinkItem(props: SideBarLinkItem) {
  const { to, text, isActive } = props;

  return (
    <Link to={to} className={clsx('text-lg hover:text-red-500 active:text-red-400', isActive && 'font-bold')}>
      {text}
    </Link>
  );
}
