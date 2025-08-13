"use client";
import { motion } from "motion/react";

const Description = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto my-7 w-2/3 text-center text-base md:w-1/2 md:text-xl"
      >
        We write and publish articles related to AI research on medium’s
        HumansForAI page with over 1K+ subscribers. Our team writes weekly
        newsletters with current job postings, AI industry updates and more!
      </motion.p>
    </>
  );
};

export default Description;
