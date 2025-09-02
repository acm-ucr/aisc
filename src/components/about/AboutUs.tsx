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
            The AI Student Collective is a national network of student
            organizations dedicated to providing accessible AI & tech literacy
            through professional development programs and events. The Collective
            stands on the three pillars of accessibility, literacy, and
            diversity and works to create a more equitable future in technology
            by leveraging industry connections to elevate student experiences.
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
            Each quarter is marked by high-impact events, such as symposia,
            panels, and product competitions, as well as local opportunities
            such as workshops, technical consulting, and corporate networking.
            Our community at UC Riverside is 500+ strong, and we look forward to
            continuing our impact on the student community both locally and
            nationally.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
