"use client";

import Image, { StaticImageData } from "next/image";

interface ProjectsProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const RightAlignedProject = ({ image, title, description }: ProjectsProps) => {
  return (
    <div className="flex items-center bg-white p-3">
      <Image
        className="mx-auto h-[20vh] w-[25vw] rounded-2xl object-cover"
        src={image}
        alt={title}
      />
      <div className="flex w-2/3 flex-col gap-2 p-5 text-right">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default RightAlignedProject;
