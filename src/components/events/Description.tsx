"use client";

import Image from "next/image";
import Placeholder from "@/public/placeholders/ambiguous.webp";
import { motion } from "motion/react";
import eventDesc from "@/data/EventDescriptions";

const Description = () => {
  return (
    <>
      <div className="m-5 flex flex-col justify-evenly p-10 md:flex-row md:gap-10">
        {eventDesc.map(({ title, description }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: i * 0.2 },
            }}
            className="flex h-1/2 w-full flex-col items-center gap-2"
          >
            <p className="self-start text-center text-2xl font-bold">{title}</p>
            <Image
              className="h-[20vh] w-full rounded-4xl object-cover md:h-[30vh]"
              src={Placeholder}
              alt="Placeholder Event"
            />
            <p className="p-8 text-center text-lg">{description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Description;
