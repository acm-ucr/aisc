"use client";

import Image, { StaticImageData } from "next/image";

interface ProjectsProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const LeftAlignedProject = ({ image, title, description }: ProjectsProps) => {
  return (
    <div className="to-aisc-blue/50 flex flex-row items-start bg-gradient-to-r from-white from-5% to-95% p-3">
      <div className="flex w-2/3 flex-col gap-2 p-5">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl">{description}</p>
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
