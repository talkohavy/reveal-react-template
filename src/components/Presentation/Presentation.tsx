import { type PropsWithChildren, useEffect, useRef } from 'react';
import Reveal, { type Api } from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';
import RevealMath from 'reveal.js/plugin/math/math.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.js';
import registerJavascriptLanguage from '../../common/utils/languages/javascript';
import registerTypescriptLanguage from '../../common/utils/languages/typescript';

export type PresentationProps = PropsWithChildren<{
  /**
   * Display presentation control arrows.
   *
   * @default true
   */
  showControls?: boolean;
  /**
   * Display slide numbers in the bottom right corner of the presentation.
   *
   * @default false
   */
  showSlideNumber?: boolean;
  /**
   * Display slide numbers in the url.
   *
   * Useful when wanting refresh to stay on the same slide.
   *
   * @default true
   */
  showSlideHashInUrl?: boolean;
  /**
   * Determines where controls appear, "edges" or "bottom-right"
   *
   * @defaultValue `bottom-right`
   */
  controlsLayout?: 'edges' | 'bottom-right';
  /**
   * Show progress bar at the bottom of the presentation.
   *
   * @default true
   */
  showProgress?: boolean;
  /**
   * Enable keyboard navigation.
   *
   * @default true
   */
  isKeyboardEnabled?: boolean;
  /**
   * Enable touch navigation.
   *
   * @default true
   */
  isTouchEnabled?: boolean;
  /**
   * Show speaker notes.
   *
   * When a slide has side notes, you can hit 's' to open up speaker notes in
   * a different window. However, if you set showNotes to `true`,
   * the side notes would be visible on the slide itself - to all viewers.
   *
   * @default false
   */
  showNotes?: boolean;
  /**
   * Loop the presentation.
   *
   * @default false
   */
  isLoop?: boolean;
  /**
   * Hide the cursor after a certain time of inactivity (in ms).
   *
   * @default 5000
   */
  hideCursorAfter?: number;
  /**
   * Transition speed
   *
   * @defaultValue `default`
   */
  transitionSpeed?: 'default' | 'fast' | 'slow';
  /**
   * Transition style for full page slide backgrounds
   *
   * @defaultValue `fade`
   */
  backgroundTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  /**
   * Can be used to globally disable auto-animation
   *
   * @defaultValue `true`
   */
  autoAnimate?: boolean;
  /**
   * Default settings for our auto-animate transitions, can be
   * overridden per-slide or per-element via data arguments
   *
   * @defaultValue `1.0`
   */
  autoAnimateDuration?: number;
  /**
   * Transition style
   *
   * @defaultValue `slide`
   */
  transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
}>;

export default function Presentation(props: PresentationProps) {
  const {
    showControls = true,
    showSlideNumber = false,
    showSlideHashInUrl = true,
    controlsLayout = 'bottom-right',
    showProgress = true,
    isKeyboardEnabled = true,
    isTouchEnabled = true,
    showNotes = false,
    isLoop = false,
    hideCursorAfter = 5000,
    transition = 'slide',
    transitionSpeed = 'slow',
    backgroundTransition = 'fade',
    autoAnimate = true,
    autoAnimateDuration = 1.0,
    children,
  } = props;

  const deckContainerDivRef = useRef<HTMLElement>({} as HTMLElement);
  const deckRef = useRef<Api>(null);

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    const revealInstance = new Reveal(deckContainerDivRef.current, {
      transition,
      transitionSpeed,
      autoAnimate,
      controls: showControls,
      hash: showSlideHashInUrl,
      controlsLayout,
      controlsBackArrows: 'faded',
      progress: showProgress,
      slideNumber: showSlideNumber,
      keyboard: isKeyboardEnabled,
      touch: isTouchEnabled,
      loop: isLoop,
      rtl: false,
      showNotes,
      hideCursorTime: hideCursorAfter,
      backgroundTransition,
      autoAnimateDuration,
      // other config options
    });

    revealInstance.initialize({
      highlight: {
        excapeHTML: true,
        highlightOnLoad: true, // <--- defaults to `true`. When it's set to false, code is not highlighted.
        beforeHighlight: (hljs) => {
          hljs.registerLanguage('javascript', registerJavascriptLanguage);
          hljs.registerLanguage('typescript', registerTypescriptLanguage);
        },
      },
      plugins: [RevealNotes, RevealMarkdown, RevealHighlight, RevealMath.KaTeX],
    });

    deckRef.current = revealInstance;

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (_error) {
        console.warn('Reveal.js destroy call failed.');
      }
    };
  }, [showControls, showSlideNumber]);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className='reveal' ref={deckContainerDivRef as any}>
      <div className='slides'>{children}</div>
    </div>
  );
}
