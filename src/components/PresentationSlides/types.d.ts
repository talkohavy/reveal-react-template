export type FragmentClasses = {
  effect:
    | 'fadeIn' // Start hidden, fade in
    | 'fadeOut' // Start visible, fade out
    | 'semiFadeOut' // Fade out to 50%
    | 'fadeUp' // Slide up while fading in
    | 'fadeDown' // Slide down while fading in
    | 'fadeLeft' // Slide left while fading in
    | 'fadeRight' // Slide right while fading in
    | 'fadeInThenOut' // Fades in, then out on the next step
    | 'fadeInThenSemiOut' // Fades in, then to 50% on the next step
    | 'currentVisible' // Fades in, then out on the next step
    | 'grow' // Scale up
    | 'shrink' // Scale down
    | 'highlightRed' // Turn text red
    | 'highlightGreen' // Turn text green
    | 'highlightBlue' // Turn text blue
    | 'highlightCurrentRed' // Turn text red, then back to original on next step
    | 'highlightCurrentGreen' // Turn text red, then back to original on next step
    | 'highlightCurrentBlue' // Turn text red, then back to original on next step
    | 'strikeThrough'; // Strike through
};

export type SlideConfig = {
  dataBackgroundColor?: string;
  /**
   * @default 'fade'
   */
  dataTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  /**
   * @default 'fade'
   */
  dataBackgroundTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  /**
   * @example
   * "linear-gradient(to bottom, #283b95, #17b2c3)"
   */
  dataBackgroundGradient: string;
  dataBackgroundImage?: string;
  dataBackgroundSize?: string;
  /**
   * @default 1
   */
  dataBackgroundOpacity?: number;
  dataBackgroundVideo?: string;
  dataBackgroundVideoLoop?: boolean;
  dataBackgroundVideoMuted?: boolean;
  dataBackgroundIframe?: string;
  dataBackgroundInteractive?: boolean;
  /**
   * @default false
   */
  dataAutoAnimate?: boolean;
  /**
   * @default false
   */
  rStack?: boolean;
  /**
   * @default false
   */
  rStretch?: boolean;
};
