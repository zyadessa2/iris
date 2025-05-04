'use client'
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <motion.div
    initial={{ opacity: 0 , y: 50 }}
          whileInView={{ opacity: 1 , y: 0 }}
          transition={{ duration: 1.5 }}
    className="relative w-full max-w-xl">
      <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
      <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
          {title}
        </h1>

        <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
          {description}
        </p>

        <Meteors number={20} />
      </div>
    </motion.div>
  );
};

const MissionVision = () => {
  return (
    <div className="relative flex flex-col h-[25rem] w-full bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>

      <div className="w-full py-32 mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 px-4 lg:px-0">
        <Card
          title="Our Mission"
          description="To distinguish ourselves in the event management market by managing, producing and supporting outstanding events that exceed customers increasing expectations in terms of value, service and innovation."
        />
        <Card
          title="Our Vision"
          description="We strive to be seen as leaders and innovators in the event management industry. We gain the trust and respect of our clients and our staff our values. We will show genuine concern for the success of our events."
        />
        
      </div>
    </div>
  );
};

export default MissionVision;
