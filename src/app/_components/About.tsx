'use client'; 
import { TextGenerateEffectDemo } from "@/components/textGenerator";
import { cn } from "@/lib/utils";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";
import MissionVision from "./MissionVision";
import { motion } from "motion/react";



const words = `Iris provides solutions for the medical field which bridge the gap between the need to contain costs and the importance of achieving the client’s objectives. We provide a very straightforward, logical, and consultative approach for the development and implementation of meeting initiatives unique to each individual event owner.`;
const items = [
  {
    title: "Tyler Durden",
    image: "/images/cardio-egypt.jpg",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
  },
  {
    title: "The Narrator",
    image: "/images/cardio-egypt.jpg",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
  },
  {
    title: "Iceland",
    image: "/images/cardio-egypt.jpg",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  {
    title: "Japan",
    image: "/images/cardio-egypt.jpg",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
  },
  {
    title: "Norway",
    image: "/images/cardio-egypt.jpg",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
  },
  {
    title: "New Zealand",
    image: "/images/cardio-egypt.jpg",
    className: "absolute top-24 left-[45%] rotate-[-7deg]",
  },
  {
    title: "Canada",
    image: "/images/cardio-egypt.jpg",
    className: "absolute top-8 left-[30%] rotate-[4deg]",
  },
];

const About = () => {
  return (
    <div id="about" className="relative flex flex-col h-[105rem] lg:h-[92rem]  w-full bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <motion.h2
      initial={{ opacity: 0 , y: 50 }}
      whileInView={{ opacity: 1 , y: 0 }}
      
      transition={{ duration: 1.5 }}
      className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-5xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mt-10">
        Who We Are ?
      </motion.h2>
      <TextGenerateEffectDemo words={words} />
      <MissionVision />
      <DraggableCardContainer className="relative mt-96 py-32 lg:mt-32 md:mt-20  flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        The price of greatness is responsibility over each of your thoughts.
        </p>
        {items.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <Image
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              width={320}
              height={320}
            />
            <h3 className="mt-4 hidden lg:block text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
};

export default About;
