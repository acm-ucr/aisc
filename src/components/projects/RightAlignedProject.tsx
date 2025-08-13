"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface ProjectsProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const RightAlignedProject = ({ image, title, description }: ProjectsProps) => {
  return (
    <div className="flex flex-col-reverse items-center bg-white p-3 sm:flex-row">
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
      >
        <Image
          className="mx-auto h-[20vh] w-[25vw] rounded-2xl object-cover"
          src={image}
          alt={title}
        />
      </motion.div>
      <div className="w-2/3 flex-row gap-2 text-left sm:text-right md:p-5">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <p className="text-lg font-bold md:text-2xl">{title}</p>
          <p className="text-sm md:text-xl">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};
export default RightAlignedProject;
