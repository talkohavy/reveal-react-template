import { useMemo } from 'react';
import { convertReactPropsToRevealProps } from '../utils/convertReactPropsToRevealProps';

/**
 * @typedef {import('../types').SlideConfig} SlideConfig
 */

/**
 * @param {import('react').PropsWithChildren<{
 *   slideConfig?: SlideConfig,
 * }>} props
 */
export default function Slide(props) {
  const { children, slideConfig, ...rest } = props;

  const revealProps = useMemo(() => convertReactPropsToRevealProps(slideConfig), [slideConfig]);

  return (
    <section {...revealProps} {...rest}>
      {children}
    </section>
  );
}
