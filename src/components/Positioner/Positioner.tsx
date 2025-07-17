import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Positions, type PositionKeys } from './logic/constants';

type PositionerProps = PropsWithChildren<{
  position?: PositionKeys;
  className?: string;
}>;

export default function Positioner(props: PositionerProps) {
  const { position = 'topLeftCorner', className, children } = props;

  return (
    <div className={clsx('absolute inset-0 flex size-full', Positions[position] ?? Positions.topLeftCorner, className)}>
      {children}
    </div>
  );
}
