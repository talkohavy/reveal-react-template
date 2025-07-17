import { EFFECTS } from '../../common/constants';
import PresentationSlides from '../../components/PresentationSlides';
import Slide from '../../components/PresentationSlides/Slide';
import JavaScriptCode from './JavaScriptCode';
import TypeScriptCode from './TypeScriptCode';

export default function TutorialPage() {
  return (
    <PresentationSlides>
      {/* Example 1: Simple slide */}
      <section>
        <h2>Slide 1</h2>
        <p>Simple slide</p>
      </section>

      {/* Example 2: A slide with some side notes - open up the Speaker notes using the 'S' key */}
      <section>
        <h2>Slide 2</h2>
        <p>This slide has secret side notes.</p>
        <p>hit s to open up side notes in a different window.</p>
        <aside className='notes'>these are private notes</aside>
      </section>

      {/* Example 3: Horizontal inner slides */}
      <section>
        <section>
          <h2>Slide 3.1</h2>
          <p>This slide has more slides down</p>
        </section>
        <section>Slide 3.2</section>
      </section>

      {/* Example 4: using a tailwind background is wrong */}
      <section className='bg-red-200'>
        <h2>Slide 4</h2>
        <p>using a tailwind background is wrong</p>
      </section>

      {/* Example 5: slide background */}
      <section data-background-color='rgb(70,70,255)'>
        <h2>Slide 5</h2>
        <p>data-background-color is the way to go!</p>
      </section>

      {/* Example 6: slide transition - visually better when slide has a background */}
      <section
        data-background-color='rgb(70,70,255)'
        data-transition={EFFECTS.zoom}
        data-transition-speed='slow'
        data-background-transition={EFFECTS.zoom}
      >
        <h2>Slide 6</h2>
        <p>Slide transitions in, and also out, with a zoom effect</p>
      </section>

      {/* Example 7: Rendered using my custom Slide component */}
      <Slide slideConfig={{ dataBackgroundColor: 'blue', dataBackgroundTransition: 'fade' }}>
        <h2>Slide 7</h2>
        <p>Rendered a slide using my custom Slide component</p>
      </Slide>

      {/* Example 8: reveal's default alignment */}
      <Slide slideConfig={{ dataBackgroundColor: 'aquamarine' }}>
        <h2>Slide 8</h2>
        <p className='text-base'>
          By default, Reveal's default alignment makes h2 & p elements centered horizontally, while div elements are
          aligned to the left.
        </p>

        <div className='size-44 bg-red-500'>Box 1</div>
        <div className='size-44 bg-blue-500'>Box 2</div>
        <div className='size-44 bg-green-500'>Box 3</div>
      </Slide>

      {/* Example 9: rStack centers div components horizontally */}
      <Slide slideConfig={{ rStack: true, dataBackgroundColor: 'aquamarine' }}>
        <h2>Slide 9</h2>
        <p className='r-stretch text-base'>
          You can use the <code>rStack</code> and set it to true to have div elements also be centered horizontally.
        </p>

        <div className='size-44 bg-red-500'>Box 1</div>
        <div className='size-44 bg-blue-500'>Box 2</div>
        <div className='size-44 bg-green-500'>Box 3</div>
      </Slide>

      {/* Example 10: using r-stretch stretch an element horizontally */}
      <Slide slideConfig={{ rStack: true }}>
        <h2>Slide 10</h2>
        <div className='r-stretch border bg-slate-600'>
          <div>I WILL STRETCH TO FILL SCREEN</div>
          <div className='p-10 text-left'>
            <div>Stretch Limitations:</div>
            <ul>
              <li>Only direct descendants of a slide section can be stretched</li>
              <li>Only one descendant per slide section can be stretched</li>
            </ul>
          </div>
        </div>
        <p className='bg-[#383838]'>I am just some text</p>
        <p className='bg-[#272727]'>me too!</p>
      </Slide>

      {/* Example 11: using fragments to animate elements */}
      <Slide slideConfig={{ rStack: true }}>
        <h2>Slide 11</h2>
        <p className='text-left text-base'>
          Basic usage of the fragment ability, to have elements transition one after another.
        </p>
        <p className='r-stretch text-left text-base'>default transition is fade-in.</p>

        <div className='fragment size-44 bg-red-500'>Box 1</div>
        <div className='fragment size-44 bg-blue-500'>Box 2</div>
        <div className='fragment size-44 bg-green-500'>Box 3</div>
      </Slide>

      {/* Example 12: control the order of animated fragments using the data-fragment-index attribute. */}
      <Slide slideConfig={{ rStack: true }}>
        <h2>Slide 12</h2>
        <p className='text-left text-base'>
          control the order of animated fragments using the data-fragment-index attribute.
        </p>
        <p className='r-stretch text-left text-base'>
          This is useful when you want to maintain the layout order of elements positioning, and only switch the order
          of their animated appearance.
        </p>

        <div data-fragment-index='3' className='fragment size-44 bg-red-500'>
          Box 1 - last
        </div>
        <div data-fragment-index='1' className='fragment size-44 bg-blue-500'>
          Box 2 - first
        </div>
        <div data-fragment-index='2' className='fragment size-44 bg-green-500'>
          Box 3 - second
        </div>
      </Slide>

      {/* Example 13: different transition effects */}
      <Slide slideConfig={{ rStack: true }}>
        <h2>Slide 13</h2>
        <p className='text-left text-base'>Show all the available effects.</p>

        <div className='r-stretch text-2xl'>
          <div className='fragment fade-in bg-red-500'>Fade in and stay</div>
          <div className='fragment fade-out bg-red-500'>
            First visible then Fade out <i>before</i> next appears
          </div>
          <div className='fragment fade-in-then-out'>
            Fade in, then out <i>when</i> next appears
          </div>
          <div className='fragment current-visible'>
            current-visible = Fade in, then out <i>when</i> next appears
          </div>
          <div className='fragment fade-in-then-semi-out'>
            Fade in, then semi out <i>when</i> next appears
          </div>
          <div className='fragment highlight-red bg-green-500'>Always visible, just highlight red</div>
          <div className='fragment highlight-current-red '>
            Always visible, then turn red, then back to original on next step
          </div>
          <div className='fragment fade-up'>Slide up while fading in</div>
          <div className='fragment grow'>Start with normal size then grow</div>
          <div className='fragment shrink'>Start with normal size then shrink</div>
        </div>
      </Slide>

      {/* Example 14: Complex animations Nested fragments */}
      <Slide slideConfig={{ rStack: true }}>
        <h2>Slide 14</h2>
        <p className='text-left text-base'>Using nested elements to achieve complex animations.</p>

        <div className='fragment fade-in'>
          <div className='fragment highlight-red grow'>
            <div className='fragment fade-out shrink'>
              I will first fade in, then grow and turn red, then shrink and fade out
            </div>
          </div>
        </div>
      </Slide>

      {/* Example 15: r fit text */}
      <Slide slideConfig={{ rStack: true }}>
        <h2>Slide 15</h2>

        <h2 className='r-fit-text'>FIT TEXT</h2>
        <h2 className='r-fit-text'>CAN BE USED FOR MULTIPLE HEADLINES</h2>
      </Slide>

      {/* Example 16: auto animate V1 */}
      {/* NOTE! it doesn't work with tailwind! Only with direct `style` attribute. */}
      <Slide slideConfig={{ rStack: true, dataAutoAnimate: true }}>
        <h1>Slide 16</h1>

        <h2>Auto Animate V1</h2>
      </Slide>

      <Slide slideConfig={{ rStack: true, dataAutoAnimate: true }}>
        <h1>Slide 16</h1>

        {/* <h2 className='mt-4 text-red-600'>Auto Animate</h2> */}
        <h2 style={{ marginTop: 100, color: 'red' }}>Auto Animate V1</h2>
      </Slide>

      {/* Example 17: auto animate V2 */}
      <Slide slideConfig={{ rStack: true, dataAutoAnimate: true }}>
        <h1>Slide 17</h1>
      </Slide>

      <Slide slideConfig={{ rStack: true, dataAutoAnimate: true }}>
        <h1>Slide 17</h1>

        <h2>Auto Animate V2</h2>
      </Slide>

      {/* Example 18: auto animate V3 - using data-id */}
      <Slide slideConfig={{ rStack: true, dataAutoAnimate: true }}>
        <h1>Slide 18</h1>
        <div>hi</div>
        <div data-id='box' style={{ height: 50, backgroundColor: 'salmon' }}>
          Auto Animate V3 - using data-id
        </div>
      </Slide>

      <Slide slideConfig={{ rStack: true, dataAutoAnimate: true }}>
        <h1>Slide 18</h1>

        <div>bye</div>
        <div data-id='box' style={{ height: 200, backgroundColor: 'blue' }}>
          Auto Animate V3 - using data-id
        </div>
      </Slide>

      {/* Example 19: Displaying code - notice the line-number offset */}
      <Slide>
        <h1>Slide 19</h1>
        <p>Display code with syntax highlighting</p>
        <p>(Notice the line number offset)</p>

        <pre>
          <code data-trim data-line-numbers data-noescape data-ln-start-from='7'>
            {String.raw`let planets = [
  { name: 'mars', diameter: '6779'},
];

/**
 * @typedef {import('../types').SlideConfig} SlideConfig
 */

/** @param {SlideConfig} slideConfig */
function convertReactPropsToRevealProps(slideConfig) {
  if (!slideConfig) return {};

  let className = '';
  slideConfig.rStack && (className += 'r-stack ');
  slideConfig.rStretch && (className += 'r-stretch ');

  const revealProps = {
    'data-background-color': slideConfig.dataBackgroundColor,
    'data-background-transition': slideConfig.dataBackgroundTransition,
    'data-background-image': slideConfig.dataBackgroundImage,
    'data-background-video': slideConfig.dataBackgroundVideo,
    'data-background-video-loop': slideConfig.dataBackgroundVideoLoop,
    'data-background-video-muted': slideConfig.dataBackgroundVideoMuted,
    'data-auto-animate': slideConfig.dataAutoAnimate,
    className,
  };

  return revealProps;
}

export { convertReactPropsToRevealProps };
`}
          </code>
        </pre>
      </Slide>

      {/* Example 20: Displaying code with highlighted line numbers */}
      <Slide>
        <h1>Slide 20</h1>
        <p>Code with selected lines to highlight</p>

        <pre>
          <code data-line-numbers='3,8-10'>
            {`<table>
  <tr>
    <td>Apples</td>
    <td>$1</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Oranges</td>
    <td>$2</td>
    <td>18</td>
  </tr>
</table>`}
          </code>
        </pre>
      </Slide>

      {/* Example 21: Displaying code step-by-step */}
      <Slide>
        <h1>Slide 21</h1>
        <p>Display code step-by-step</p>

        <pre>
          <code data-trim data-noescape data-line-numbers='13-15|18-25|28'>
            {String.raw`let planets = [
  { name: 'mars', diameter: '6779'},
];

/**
 * @typedef {import('../types').SlideConfig} SlideConfig
 */

/** @param {SlideConfig} slideConfig */
function convertReactPropsToRevealProps(slideConfig) {
  if (!slideConfig) return {};

  let className = '';
  slideConfig.rStack && (className += 'r-stack ');
  slideConfig.rStretch && (className += 'r-stretch ');

  const revealProps = {
    'data-background-color': slideConfig.dataBackgroundColor,
    'data-background-transition': slideConfig.dataBackgroundTransition,
    'data-background-image': slideConfig.dataBackgroundImage,
    'data-background-video': slideConfig.dataBackgroundVideo,
    'data-background-video-loop': slideConfig.dataBackgroundVideoLoop,
    'data-background-video-muted': slideConfig.dataBackgroundVideoMuted,
    'data-auto-animate': slideConfig.dataAutoAnimate,
    className,
  };

  return revealProps;
}

export { convertReactPropsToRevealProps };
`}
          </code>
        </pre>
      </Slide>

      <Slide>
        <section data-auto-animate>
          <pre data-id='code-animation'>
            <code data-trim data-line-numbers>
              {`let planets = [
  { name: 'mars', diameter: 6779 },
]`}
            </code>
          </pre>
        </section>

        <section data-auto-animate>
          <pre data-id='code-animation'>
            <code data-trim data-line-numbers>
              {`let planets = [
  { name: 'mars', diameter: 6779 },
  { name: 'earth', diameter: 12742 },
  { name: 'jupiter', diameter: 139820 }
]`}
            </code>
          </pre>
        </section>

        <section data-auto-animate>
          <pre data-id='code-animation'>
            <code data-trim data-line-numbers>
              {`let circumferenceReducer = ( c, planet ) => {
  return c + planet.diameter * Math.PI;
}

let planets = [
  { name: 'mars', diameter: 6779 },
  { name: 'earth', diameter: 12742 },
  { name: 'jupiter', diameter: 139820 }
]

let c = planets.reduce( circumferenceReducer, 0 )`}
            </code>
          </pre>
        </section>
      </Slide>

      {/* Example 22: Displaying Math */}
      <Slide>
        <h2>Slide 22</h2>
        <p>Displaying Math. Here are the Lorenz Equations:</p>

        <div>
          {String.raw`\[\begin{aligned}
\dot{x} & = \sigma(y-x) \\
\dot{y} & = \rho x - y - xz \\
\dot{z} & = -\beta z + xy
\end{aligned} \]`}
        </div>
      </Slide>

      <JavaScriptCode />
      <TypeScriptCode />
    </PresentationSlides>
  );
}
