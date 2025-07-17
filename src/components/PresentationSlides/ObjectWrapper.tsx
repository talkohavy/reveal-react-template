import clsx from 'clsx';

const POSITION = {
  topLeftCorner: 'items-start justify-start',
  topRightCorner: 'items-start justify-end',
  bottomLeftCorner: 'items-end justify-start',
  bottomRightCorner: 'items-end justify-end',
  center: 'items-center justify-center',
  topCenter: 'items-start justify-center',
  bottomCenter: 'items-end justify-center',
  leftCenter: 'items-center justify-start',
  rightCenter: 'items-center justify-end',
};

/**
 * @param {import('react').PropsWithChildren<{
 *   position?: 'topLeftCorner' | 'topRightCorner' | 'bottomLeftCorner' | 'bottomRightCorner' | 'center' | 'topCenter' | 'bottomCenter' | 'leftCenter' | 'rightCenter',
 *   className?: string
 * }>} props
 */
export default function ObjectWrapper(props) {
  const { position = 'topLeftCorner', className, children } = props;

  return (
    <div className={clsx('absolute inset-0 flex size-full', POSITION[position] ?? POSITION.topLeftCorner, className)}>
      {children}
    </div>
  );
}
