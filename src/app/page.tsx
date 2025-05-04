import { Vortex } from "@/components/ui/vortex";
import About from "./_components/About";
import ConatctUs from "./_components/ConatctUs";
import Events from "./_components/Events";
import Hero from "./_components/Hero";
import Sponsers from "./_components/Sponsers";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Sponsers/>
      <Events/>


<div className="overflow-hidden">


      <Vortex
      backgroundColor="black"
      className="flex items-center flex-col justify-center px-2 md:px-10 py-38 w-full h-full"
    >
      <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
      Leave a Mark with Your Next Event.
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
      Get ready to ignite your vision with us—it’ll spark more excitement than you’ve ever felt and leave a lasting impression.
      </p>
    </Vortex>
</div>


      <ConatctUs/>
    </main>
  );
}
