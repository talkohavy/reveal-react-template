import SideNotes from '../../../components/PresentationSlides/SideNotes';
import Slide from '../../../components/PresentationSlides/Slide';

export default function ReducedReadabilitySlide() {
  return (
    <Slide>
      <h3>Reduced Readability</h3>

      <div className='r-stretch w-full border'>
        <h2 className='self-center underline'>what else?</h2>

        <ul className='p-4 text-left text-lg'>
          <li className='fragment'>Micro-Services</li>
          <li className='fragment'>Micro-Frontends</li>
        </ul>
      </div>

      <SideNotes>
        But let's think for a second. What else has reduced readability, yet we still use it? (click: micro-services) Do
        we really think that putting an API-gateway in the middle, which proxies our requests, is more readable? Have
        you tried poxing web-sockets through an API-gateway? I have. Let me tell you - not easy. Same thing with
        micro-frontends (click: micro-frontends), it is very complex, very hard to reason about when first starting, but
        we use it because in the long run, the advantages overweigh the disadvantages. And if a programmer comes along
        and says "hey man, this is too complex, I can't understand this", we tell him "You're a programmer, learn how to
        fish".
      </SideNotes>
    </Slide>
  );
}
