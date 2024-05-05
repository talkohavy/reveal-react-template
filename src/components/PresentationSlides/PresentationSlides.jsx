import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';
import RevealMath from 'reveal.js/plugin/math/math.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import './themes/atom-one-dark.css';

// import './themes/monokai.css';
// import './themes/1c-light.css';
// import './themes/a11y-light.css';
// import './themes/agate.css';
// import './themes/an-old-hope.css';
// import './themes/andriodstudio.css';
// import './themes/arta.css';
// import './themes/atom-one-dark-reasonable.css';
// import './themes/github-dark-dimmed.css';
// import './themes/github-dark.css';
// import './themes/github-light.css';

export default function PresentationSlides(props) {
  const { children } = props;

  const deckDivRef = useRef(null); // reference to deck container div
  const deckRef = useRef(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    const revealInstance = new Reveal(deckDivRef.current, {
      transition: 'slide',
      // other config options
    });

    /**
     * More about initialization & config:
     * - https://revealjs.com/initialization/
     * - https://revealjs.com/config/
     */
    revealInstance
      .initialize({
        controls: true, // <--- defaults to `true`. Display presentation control arrows.
        hash: true, // <--- defaults to `false`. Add the current slide number to the URL hash so that reloading the page/copying the URL will return you to the same slide.
        // hashOneBasedIndex: true,
        controlsLayout: 'bottom-right', // <--- defaults to 'bottom-right'.
        controlsBackArrows: 'faded', // <--- defaults to 'faded'.
        progress: true, // <--- defaults to `true`. Display a presentation progress bar
        slideNumber: false, // <--- defaults to `false`.
        keyboard: true, // defaults to `true`. Navigation using keyboard arrows.
        touch: true, // defaults to `true`.
        loop: false, // <--- defaults to `false`. Loop the presentation.
        rtl: false, // defaults to `false`. Change the presentation direction to be RTL.
        showNotes: false, // <--- defaults to `false`. When a slide has side notes, you can hit 's' to open up speaker notes in a different window. However, if you set showNotes to `true`, the side notes would be visible on the slide itself - to all viewers.
        highlight: {
          excapeHTML: true,
          highlightOnLoad: true, // <--- defaults to `true`. When it's set to false, code is not highlighted.
        },
        // transitionSpeed: 'slow',
        // backgroundTransition: 'fade', // <--- Transition style for full page slide backgrounds.
        // autoAnimate: true, // <--- defaults to `true`. Can be used to globally disable auto-animation.
        hideCursorTime: 5000, // <--- defaults to 5000. Time before the cursor is hidden (in ms)
        // autoAnimateDuration: 1,
        // view: 'print', // <--- Activate the 'scroll' or the 'print' view.
        // scrollProgress: true, // <--- Force the scrollbar to remain visible when in 'scroll' view.
        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [RevealNotes, RevealMarkdown, RevealHighlight, RevealMath.KaTeX],
      })
      .then(() => {
        // good place for event handlers and plugin setups
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
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className='reveal' ref={deckDivRef}>
      <div className='slides'>{children}</div>
    </div>
  );
}
