"use client";

import Image, { StaticImageData } from "next/image";

interface ProjectsProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const LeftAlignedProject = ({ image, title, description }: ProjectsProps) => {
  return (
    <div className="to-aisc-blue/50 flex flex-col items-center bg-gradient-to-r from-white from-5% to-95% p-0 p-3 sm:flex-row">
      <div className="flex w-2/3 flex-col gap-2 py-5 md:p-5">
        <p className="text-lg font-bold md:text-2xl">{title}</p>
        <p className="text-sm md:text-xl">{description}</p>
      </div>
      <Image
        className="mx-auto h-[20vh] w-[25vw] rounded-2xl object-cover"
        src={image}
        alt={title}
      />
    </div>
  );
};

export default LeftAlignedProject;
