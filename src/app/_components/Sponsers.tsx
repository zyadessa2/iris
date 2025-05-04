import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { SparklesCore } from '@/components/ui/sparkles';
import React from 'react'

const sponsors = [
    {
        image: "/images/Iris Excellence.png",
        name: "Sponsor 1",
      },
      {
        image: "/images/Iris Excellence.png",
        name: "Sponsor 2",
      },
      {
        image: "/images/Iris Excellence.png",
        name: "Sponsor 3",
      },
      {
        image: "/images/Iris Excellence.png",
        name: "Sponsor 4",
      },
      {
        image: "/images/Iris Excellence.png",
        name: "Sponsor 5",
      },
  ];


const Sponsers = () => {
    return (
        <div>
            <div className="h-[55rem] py-32 w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <h1 className="md:text-6xl text-6xl lg:text-8xl font-bold text-center text-white relative z-20">
      Our Clients
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={sponsors}
                direction="right"
                speed="fast"
            />
            <InfiniteMovingCards
                items={sponsors}
                direction="right"
                speed="normal"
            />
            </div>
    </div>
           
        </div>
      );
}

export default Sponsers




