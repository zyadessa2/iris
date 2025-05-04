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
    image:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/494074904_1020258976918100_8764798111707171802_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=uB_0tTZvRM8Q7kNvwGl9sIx&_nc_oc=AdmDNyFfTByHtIEFTFmtIp91UgHhnTbIzta99aK3VuGK-4PDHly0CZuDuMRlusFG_Ks&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=PlWoHwuSi0XQEN6VS9ueag&oh=00_AfFchq9KJeCXghGI0rvQW05RmrdNArPXidJK7341XTLc7Q&oe=681C459B",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
  },
  {
    title: "The Narrator",
    image:
      "https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/494975541_1020272980250033_4464596433526453508_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=9nFldmMZfEYQ7kNvwE8oMfr&_nc_oc=Admiog4_MTBB2SATftzIPUH-zhfpt9ScVLQzEizS_z6NYxnZXFKQ1ucy5zxQQcLUwfk&_nc_zt=23&_nc_ht=scontent.fcai20-3.fna&_nc_gid=q8Rz1jvYnv81PeTvQDDimg&oh=00_AfEWx7RrjHa4NHVQf3oABOwyvAxXC17CD3zN4EGYrP56Hg&oe=681C43F2",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
  },
  {
    title: "Iceland",
    image:
      "https://scontent.fcai20-6.fna.fbcdn.net/v/t39.30808-6/494573519_1020279083582756_1433682257013383128_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=mz33JMIdcwQQ7kNvwEigte1&_nc_oc=Adk03GkjKlJ3eG_InxJs0kVUj5JSvs8TH4XsK0pgsUrrIB8qcev93pXGEhrmGJ1_Nzw&_nc_zt=23&_nc_ht=scontent.fcai20-6.fna&_nc_gid=q8Rz1jvYnv81PeTvQDDimg&oh=00_AfGJyzzE3yZjrRx7zWFKeLdpssWRxGtEQgFYKBdZyXn0Rg&oe=681C6CF4",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  {
    title: "Japan",
    image:
      "https://scontent.fcai20-1.fna.fbcdn.net/v/t39.30808-6/494046675_1020278980249433_7419341726118248837_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=foAZCswBWUMQ7kNvwFAgESN&_nc_oc=AdkBbp5NiX549qRmomUSW2Nn0sQ3tsRXuEZMbrRBybn5_NrX4lnh5y1_KJR59_5yDx4&_nc_zt=23&_nc_ht=scontent.fcai20-1.fna&_nc_gid=q8Rz1jvYnv81PeTvQDDimg&oh=00_AfGeQ3QlhtPe_WudFw3v6qDMs-LgL6lqqA9ODlLr4K65rA&oe=681C457C",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
  },
  {
    title: "Norway",
    image:
      "https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/494680977_1020278983582766_3118287496756553501_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=8W3JXuCQFi0Q7kNvwHm9Mjo&_nc_oc=Adkzi5cuP_xyWfFqm2byzOu1dD9Mf5oPhpmgthWH5ssVrUgnjnWd2hMRHys76U5F_hY&_nc_zt=23&_nc_ht=scontent.fcai20-2.fna&_nc_gid=q8Rz1jvYnv81PeTvQDDimg&oh=00_AfHAOBIniUBMO2B8nNTro1BQ2J1huQSESJQjt1aEqGGtXg&oe=681C495E",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
  },
  {
    title: "New Zealand",
    image:
      "https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-6/494415220_1225124875637011_8926575263196910814_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WzreL0TecOAQ7kNvwHcsA2C&_nc_oc=Adnt4tuGjA7ZzNHbYIGfjo8GnSC6EXw5Gv7c8E6FhIRHXlkqukRZcZq_-DU36bNI_6Y&_nc_zt=23&_nc_ht=scontent.fcai20-5.fna&_nc_gid=ksW-7niLOcB46Je5zRKXjA&oh=00_AfFe3CiccscpxcSmfNgs5Wn2PiGwdEvsFCgjiZRpqsnreg&oe=681C44B6",
    className: "absolute top-24 left-[45%] rotate-[-7deg]",
  },
  {
    title: "Canada",
    image:
      "https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/494289437_1225123748970457_2128120968907178194_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=y0aIiDbR7kYQ7kNvwEVZ0e0&_nc_oc=AdkJZ7oCMEgF5QEQZyeAnMAopa1WsLIeIREUixPRabc6JQgIU8TpziT_JSM7HKf_ScY&_nc_zt=23&_nc_ht=scontent.fcai20-4.fna&_nc_gid=ksW-7niLOcB46Je5zRKXjA&oh=00_AfFlDlNxoHoSl05aL3U1OcNq4xqPBBl30WH0kOG8H7uwSg&oe=681C6A9F",
    className: "absolute top-8 left-[30%] rotate-[4deg]",
  },
];

const About = () => {
  return (
    <div id="about" className="relative flex flex-col h-[95rem] w-full bg-black">
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
      className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight mt-10">
        Who We Are ?
      </motion.h2>
      <TextGenerateEffectDemo words={words} />
      <MissionVision />
      <DraggableCardContainer className="relative my-20 flex min-h-screen w-full items-center justify-center overflow-clip">
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
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
};

export default About;
