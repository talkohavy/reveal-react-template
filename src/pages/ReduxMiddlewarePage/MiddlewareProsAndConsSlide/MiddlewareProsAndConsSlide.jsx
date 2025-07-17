import SideNotes from '../../../components/SideNote';
import Slide from '../../../components/Slide';

export default function MiddlewareProsAndConsSlide() {
  return (
    <Slide>
      <h1>Pros And Cons</h1>

      <div className='r-stretch flex w-full items-start justify-between border'>
        <div className='flex size-full flex-col items-start justify-start border-r'>
          <h2 className='self-center underline'>Pros</h2>

          <ul className='p-4 text-left text-lg'>
            <li className='fragment highlight-green'>logic is removed from UI</li>
            <li>Highly predictable</li>
            <li>0 singletons</li>
            <li>Safely add code (Isolated code)</li>
            <li>Maintainable</li>
            <li>Efficient (1 render)</li>
            <li>Redux Logger</li>
            <li className='fragment highlight-green'>Highly testable</li>
            <li className='fragment highlight-green'>Allows for flow-testing</li>
          </ul>
        </div>

        <div className='flex size-full flex-col items-start justify-start'>
          <h2 className='self-center underline'>Cons</h2>

          <ul className='p-4 text-lg'>
            <li>complex to learn</li>
            <li className='fragment highlight-red'>reduced readability - code is scattered across different places</li>
          </ul>
        </div>
      </div>

      <SideNotes>
        <ul>
          <li>logic is removed from UI</li>
          <li>Highly predictable - since it's redux</li>
          <li>
            Zero singletons. The store is not a singleton, which as a bonus allows for parallel run of unit tests, which
            isn't possible if it were a singleton.
          </li>
          <li>I can safely add/remove code, without worrying about affecting other parts of the application</li>
          <li>Maintainable - this is something I can tell you from experience. I found it easy to maintain.</li>
          <li>Efficient (1 render)</li>
          <li>
            Redux Logger - since everything goes through redux, you get - for free - a timeline of events which can be
            logged and monitored
          </li>
          <li>
            Highly testable - it's very easy to write tests for it. In a way that isn't awkward, and doesn't require
            weird patches, that don't feel natural.
          </li>
          <li>
            Flow testing - I can test an entire business flow, from start to end, while mocking the bare minimum that's
            required for the mock. And we will see this in the next slide.
          </li>
        </ul>
        Now, out of everything in the pros list, the most beneficial are: (click) logic & UI separation, (click) that
        it's highly testable, (click) and that it allows for flow-testing. Against the obvious con which is: (click)
        reduced readability.
      </SideNotes>
    </Slide>
  );
}
