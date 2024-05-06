import SideNotes from '../../../components/PresentationSlides/SideNotes';
import Slide from '../../../components/PresentationSlides/Slide';

export default function RefactorProsAndConsSlide() {
  return (
    <Slide>
      <h3>Refactor - Pros And Cons</h3>

      <div className='r-stretch flex w-full items-start justify-between border'>
        <div className='flex size-full flex-col items-start justify-start border-r'>
          <h2 className='self-center underline'>Pros</h2>

          <ul className='p-4 text-left text-lg'>
            <li>no need to learn something new</li>
            <li>logic is still removed from UI</li>
            <li className='fragment highlight-green'>increased readability - code is found in 1 place</li>
          </ul>
        </div>

        <div className='flex size-full flex-col items-start justify-start'>
          <h2 className='self-center underline'>Cons</h2>

          <ul className='p-4 text-lg'>
            <li>Redux Logger</li>
            <li className='fragment highlight-red'>Harder to test (2 singletons)</li>
            <li className='fragment highlight-red'>Can't test a partial flow (request/response)</li>
          </ul>
        </div>
      </div>

      <SideNotes>
        What did we lose here? What did we gain?
        <br />
        <br />
        We got... (read the points)
        <br />
        <br />
        So, in conclusion, this is all I had to say, I really believe in this infra, it allowed me to work fast - and be
        consistent with all the conventions that I had laid - it's been easy for me to debug it over the past years,
        <br />
        <br />
        and even if you... were to decide to go ahead with the refactoring, this presentation was important to me,
        because I'll admit - I did a very poor job in defending this architecture on thursday, I was not ready for the
        challenge, and if this structure falls in battle, at least it got to be represented with the honor. Thank you,
        and they say - the floor is yours.
      </SideNotes>
    </Slide>
  );
}
