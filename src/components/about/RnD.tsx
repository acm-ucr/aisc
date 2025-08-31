"use client";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/public/aisc_logo.png";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const RandD = () => {
  return (
    <motion.div
      className="mx-20 my-10 flex flex-col items-center justify-center sm:mx-25 md:mx-30 lg:mx-35"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-2xl font-semibold">R&D</p>
      <div className="grid grid-cols-1 justify-center gap-10 pt-10 sm:grid-cols-2">
        <Image
          src={Placeholder}
          alt="Image"
          className="h-[30vh] w-[60vh] justify-self-center rounded-2xl object-cover sm:h-[35vh] md:h-[40vh] lg:h-[45vh]"
        />
        <div className="grid-row-2 grid">
          <p className="pt-0 pb-5 text-center text-sm sm:pt-6 sm:text-base md:pt-7 md:text-lg lg:pt-9 lg:text-xl">
            We write and publish articles related to AI research on medium's
            HumansForAI page with over 1K+ subscribers. Our team writes weekly
            newsletters with current job postings, AI industry updates and more!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="justify-self-center"
          >
            <Button
              asChild
              className="bg-aisc-blue h-9 w-35 rounded-4xl text-sm sm:text-base md:h-13 md:w-45 md:text-lg lg:text-xl"
            >
              <Link href="/rnd" target="_blank">
                LEARN MORE
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RandD;
