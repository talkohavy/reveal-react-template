import { type PropsWithChildren, useMemo } from 'react';
import type { SlideConfig } from '../Presentation/types';
import { convertReactPropsToRevealProps } from '../../common/utils/convertReactPropsToRevealProps';

type SlideProps = PropsWithChildren<{
  slideConfig?: SlideConfig;
  className?: string;
}>;

export default function Slide(props: SlideProps) {
  const { children, slideConfig, className, ...rawRestProps } = props;

  const revealProps = useMemo(() => convertReactPropsToRevealProps(slideConfig), [slideConfig]);

  return (
    <section {...revealProps} data-state={className} {...rawRestProps}>
      {children}
    </section>
  );
}
