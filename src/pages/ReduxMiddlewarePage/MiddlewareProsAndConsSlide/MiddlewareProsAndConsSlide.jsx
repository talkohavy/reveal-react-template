import Slide from '../../../components/PresentationSlides/Slide';

export default function MiddlewareProsAndConsSlide() {
  return (
    <Slide>
      <h1>Pros And Cons</h1>

      <div className='r-stretch flex w-full items-start justify-between border'>
        <div className='flex size-full flex-col items-start justify-start border-r'>
          <h2 className='self-center underline'>Pros</h2>

          <ul className='p-4 text-left text-lg'>
            <li className='fragment highlight-green'>logic is removed from UI</li>
            <li>Isolated code</li>
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

      <aside className='notes'>
        <ul>
          <li>Redux Logger - since everything goes through redux, you get - for free - a timeline of events logged</li>
        </ul>
      </aside>
    </Slide>
  );
}
