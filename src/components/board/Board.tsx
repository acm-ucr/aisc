"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

type Properties = {
  headshot: StaticImageData;
  name: string;
  role: string;
  linkedin: string;
};

const Board = ({ headshot, name, role, linkedin }: Properties) => {
  return (
    <div className="s:w-105 mx-auto pb-14 text-center md:w-56">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
      >
        <Image
          src={headshot}
          alt="headshot"
          className="aspect-square justify-center rounded-full object-cover"
        />
        <div className="pt-4 text-2xl font-semibold">{name}</div>
        <div className="pt-4 text-2xl">{role}</div>
        <div className="items-center justify-center pt-4">
          <Link href={linkedin}>
            <FaLinkedin className="fill-aisc-blue mx-auto h-15 w-15" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Board;
