"use client";
import Image from "next/image";
import aboutUsImageOne from "@/public/placeholders/women_in_tech_event.webp";
import aboutUsImageTwo from "@/public/placeholders/ambiguous.webp";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <div className="p-12">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        <motion.div
          className="flex max-w-md flex-col items-center text-center md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={aboutUsImageOne}
            alt="Our Values"
            className="mb-4 h-[25vh] w-[80vw] max-w-[300px] rounded-3xl object-cover"
          />
          <p className="mb-2 text-xl font-medium"> Our Values</p>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum
          </p>
        </motion.div>
        <motion.div
          className="flex max-w-md flex-col items-center text-center md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={aboutUsImageTwo}
            alt="Our Values"
            className="mb-4 h-[25vh] w-[80vw] max-w-[300px] rounded-3xl object-cover"
          />
          <p className="mb-2 text-xl font-medium"> Our Mission</p>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
