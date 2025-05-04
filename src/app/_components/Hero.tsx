"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "motion/react";

const Hero = () => {
    return (
      <div id="home" className="hero">

        <BackgroundLines  className="flex items-center justify-center w-full flex-col px-4">
          <motion.h2
          initial={{ opacity: 0 , y: -50 }}
          whileInView={{ opacity: 1 , y: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          IRIS Events <br /> Management Company.
          </motion.h2>
          <motion.p
          initial={{ opacity: 0 , y: -50 }}
          whileInView={{ opacity: 1 , y: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
          professional full-service event planning and management company well known for its high 
          reputation, quality of services .
          </motion.p>
        </BackgroundLines>
      </div>
      );
}
export default Hero;

