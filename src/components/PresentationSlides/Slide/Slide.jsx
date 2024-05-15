import { useMemo } from 'react';
import { convertReactPropsToRevealProps } from '../utils/convertReactPropsToRevealProps';

/**
 * @typedef {import('../types').SlideConfig} SlideConfig
 */

/**
 * @param {import('react').PropsWithChildren<{
 *   slideConfig?: SlideConfig,
 *   className?: string
 * }>} props
 */
export default function Slide(props) {
  const { children, slideConfig, className, ...rawRestProps } = props;

  const revealProps = useMemo(() => convertReactPropsToRevealProps(slideConfig), [slideConfig]);

  return (
    <section {...revealProps} data-state={className} {...rawRestProps}>
      {children}
    </section>
  );
}
