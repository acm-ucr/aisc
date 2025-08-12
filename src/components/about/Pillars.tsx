"use client";
import Image from "next/image";
import pillarsImage from "@/public/placeholders/workshop.webp"; //replace with actual image
import { motion } from "motion/react";

const Pillars = () => {
  return (
    <div className="bg-aisc-gray flex w-full flex-col gap-10 px-5 py-10 text-center text-white sm:px-10 md:px-15 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <p className="text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
          Our 3 Pillars
        </p>
      </motion.div>

      <div className="flex flex-col place-content-between items-center sm:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <Pillar
            title="ACCESSIBILITY"
            description="Promoting AI accessibility for all by breaking down the barriers to knowledge and opportunity"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <Pillar
            title="LITERACY"
            description="Empowering students with enriching resources and experiences to shape the future"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <Pillar
            title="DIVERSITY"
            description="Celebrating diversity in AI, fostering innovation through varied perspectives"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false }}
      >
        <Image
          src={pillarsImage}
          alt="Add Alt here" //replace with actual alt
          className="mx-auto h-[50vh] w-9/10 rounded-4xl object-cover sm:mt-5 sm:h-[60vh] md:h-[70vh] lg:mt-10"
        />
      </motion.div>
    </div>
  );
};
export default Pillars;

const Pillar = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex w-8/10 flex-col gap-5 pt-5 sm:w-[20vw]">
      <p className="text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
        {title}
      </p>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl">
        {description}
      </p>
    </div>
  );
};
