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
  /**
   * All CSS color formats are supported, including hex values, keywords, rgba() or hsl().
   *
   * Possible values: 'aquamarine' | 'rgb(70, 70, 255)'
   */
  dataBackgroundColor?: string;
  /**
   * All CSS gradient formats are supported, including linear-gradient, radial-gradient and conic-gradient.
   *
   * Possible values:
   * - "linear-gradient(to bottom, #283b95, #17b2c3)"
   * - "radial-gradient(#283b95, #17b2c3)"
   */
  dataBackgroundGradient?: string;
  /**
   * By default, background images are resized to cover the full page.
   *
   * Value should be the URL of the image to show. GIFs restart when the slide opens.
   */
  dataBackgroundImage?: string;
  /**
   * Only applies if dataBackgroundImage is set.
   *
   * Options:
   *
   * 'contain' | 'cover' | 'auto' | '30%' | '200px 100px' | 'auto auto' | '3em 25%'
   *
   * @default 'cover'
   */
  dataBackgroundSize?: string;
  /**
   *  Only applies if dataBackgroundImage is set.
   *
   * See background-position on MDN.
   *
   * @default 'center'
   */
  dataBackgroundPosition?: string;
  /**
   * Only applies if dataBackgroundImage is set.
   *
   * @default 1
   */
  dataBackgroundOpacity?: number;

  /**
   * @default 'fade'
   */
  dataTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  /**
   * @default 'fade'
   */
  dataBackgroundTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
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
   * The `r-stack` layout helper lets you center and place multiple elements on top of each other. This is intended to be used together with fragments to incrementally reveal elements.
   *
   * @default false
   */
  rStack?: boolean;
  /**
   * The r-stretch layout helper lets you resize an element, like an image or video,
   * to cover the remaining vertical space in a slide.
   *
   * For example, a slide having 3 elements: A B & C.
   * By giving B the `.r-stretch` class, its height is set to the slide's height minus
   * the combined height of A and C.
   *
   * **Stretch Limitations**
   *
   * - Only direct descendants of a slide section can be stretched
   * - Only one descendant per slide section can be stretched
   *
   * @default false
   */
  rStretch?: boolean;
};
