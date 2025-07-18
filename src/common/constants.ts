export const EFFECTS = {
  fade: 'fade',
  zoom: 'zoom',
  convex: 'convex',
  concave: 'concave',
  slide: 'slide',
  none: 'none',
};

export const SLIDE_CLASSES = {
  rStack: 'r-stack',
  rStretch: 'r-stretch',
};

export const ANIMATION_CLASSES = {
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

export const TEXT_CLASSES = {
  /**
   * The `r-fit-text` class makes text as large as possible without overflowing the slide.
   * This is great when you want BIG text without having to manually find the right font
   * size. Powered by fitty ❤️
   */
  rFitText: 'r-fit-text',
  /**
   * Decorate any element with `r-frame` to make it stand out against the background.
   * If the framed element is placed inside an anchor, we'll apply a hover effect to
   * the border.
   */
  rFrame: 'r-frame',

  /**
   * Attach this to ANY ELEMENT (not just an image element) to enable the lightbox effect.
   *
   * A lightbox is a modal that displays an image or video in a full-screen overlay.
   * It's great for things like clicking on thumbnails to view a larger image or video.
   *
   * Example usages:
   * - <img src="path/to/image.jpg" alt="Description" data-preview-image="path/to/image.jpg" />
   * - <a data-preview-image="image.png">📸 Open Logo</a>
   * - <button data-preview-video="video.mp4">🎥 Open Video</button>
   */
  dataPreviewImage: 'data-preview-image',
  /**
   * Video lightboxes work the same way as image lightboxes except you use the data-preview-video attribute instead.
   *
   * Example usage:
   * <video src="video.mp4" data-preview-video></video>
   * <img src="reveal.png" data-preview-video="video.mp4">
   */
  dataPreviewVideo: 'data-preview-video',
  /**
   * The sizing of media in the lightbox can be controlled using the `data-preview-fit`
   * attribute. The following fit modes are supported:
   *
   * - scale-down (default): Scale media down if needed to fit in the lightbox.
   * - contain: Scale media up and down to fit the lightbox without cropping.
   * - cover: Scale media to cover the entire lightbox, even if some of it is cut off.
   */
  dataPreviewFit: 'data-preview-fit',
};
