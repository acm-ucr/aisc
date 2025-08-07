"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="bg-aisc-gray flex h-[40vh] w-full flex-col items-center justify-center sm:h-[70vh]">
      <motion.div
        className="font-aisc-main pb-6 text-center text-4xl text-white sm:pb-8 sm:text-5xl lg:pb-12 lg:text-6xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div>UCR AI STUDENT</div>
        <div className="sm:pt-1 lg:pt-2">COLLECTIVE</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <Button
          asChild
          className="bg-aisc-blue h-9 w-24 rounded-4xl text-2xl sm:h-12 sm:w-32 sm:text-3xl lg:h-15 lg:w-40 lg:text-4xl"
        >
          <Link href="https:/linktr.ee/aiscucr" target="_blank">
            JOIN
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Landing;
