import type { SlideConfig } from '../types';

export function convertReactPropsToRevealProps(slideConfig?: SlideConfig) {
  if (!slideConfig) return {};

  let className = '';

  if (slideConfig.rStack) className += 'r-stack ';
  if (slideConfig.rStretch) className += 'r-stretch ';

  const revealProps = {
    'data-transition': slideConfig.dataTransition,
    'data-background-color': slideConfig.dataBackgroundColor,
    'data-background-transition': slideConfig.dataBackgroundTransition,
    'data-background-gradient': slideConfig.dataBackgroundGradient,
    'data-background-image': slideConfig.dataBackgroundImage,
    'data-background-size': slideConfig.dataBackgroundSize,
    'data-background-opacity': slideConfig.dataBackgroundOpacity,
    'data-background-video': slideConfig.dataBackgroundVideo,
    'data-background-video-loop': slideConfig.dataBackgroundVideoLoop,
    'data-background-video-muted': slideConfig.dataBackgroundVideoMuted,
    'data-auto-animate': slideConfig.dataAutoAnimate,
    className,
  };

  return revealProps;
}
