"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Description = () => {
  return (
    <div className="mx-auto my-20 flex w-7/8 flex-col items-center text-center sm:w-3/4 lg:w-1/2">
      <motion.div
        className="text-xl sm:text-2xl"
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>Welcome to UCR&apos;s AI Student Collective!</div>
      </motion.div>
      <motion.div
        className="my-4 text-base leading-6 text-balance sm:my-5 sm:text-xl lg:my-6"
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          The Artificial Intelligence Student Collective at UC Riverside is a
          passionate student-led chapter committed to making AI education
          accessible, inclusive, and empowering. As part of the national AISC
          network, we aim to cultivate a space where students from all
          backgrounds can explore, build, and thrive in the world of AI and
          emerging technology.
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <Button className="bg-aisc-blue hover:bg-aisc-black rounded-3xl text-base sm:text-xl">
            <Link href="/about">Learn more About Us!</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Description;
