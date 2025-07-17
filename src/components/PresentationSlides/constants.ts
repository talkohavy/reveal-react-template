const EFFECTS = {
  fade: 'fade',
  zoom: 'zoom',
  convex: 'convex',
  concave: 'concave',
  slide: 'slide',
  none: 'none',
};

const SLIDE_CLASSES = {
  rStack: 'r-stack',
  rStretch: 'r-stretch',
};

const ANIMATION_CLASSES = {
  fadeIn: 'fade-in', // Start hidden, fade in
  fadeOut: 'fade-out', // Start visible, fade out
  semiFadeOut: 'semi-fade-out', // Fade out to 50%
  fadeUp: 'fade-up', // Slide up while fading in
  fadeDown: 'fade-down', // Slide down while fading in
  fadeLeft: 'fade-left', // Slide left while fading in
  fadeRight: 'fade-right', // Slide right while fading in
  fadeInThenOut: 'fade-in-then-out', // Fades in, then out on the next step
  fadeInThenSemiOut: 'fade-in-then-semi-out', // Fades in, then to 50% on the next step
  currentVisible: 'current-visible', // Fades in, then out on the next step
  grow: 'grow', // Scale up
  shrink: 'shrink', // Scale down
  highlightRed: 'highlight-red', // Turn text red
  highlightGreen: 'highlight-green', // Turn text green
  highlightBlue: 'highlight-blue', // Turn text blue
  highlightCurrentRed: 'highlight-current-red', // Turn text red, then back to original on next step
  highlightCurrentGreen: 'highlight-current-green', // Turn text red, then back to original on next step
  highlightCurrentBlue: 'highlight-current-blue', // Turn text red, then back to original on next step
  strikeThrough: 'strike-through', // Strike through
};

export { ANIMATION_CLASSES, EFFECTS, SLIDE_CLASSES };
