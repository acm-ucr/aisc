"use client";
import { motion } from "motion/react";
import { RDArticlesData } from "@/data/RDArticlesData";
import Image from "next/image";

const RDArticles = () => {
  return (
    <div className="grid grid-cols-1 gap-10 px-8 py-8 md:grid-cols-3 md:grid-rows-2 md:px-20 lg:px-40">
      {RDArticlesData.map(({ link, picture, alt }, index) => (
        <a key={index} href={link} target="_blank" className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className="bg-aisc-gray/10 mx-auto h-[25vh] w-2/3 rounded-4xl object-cover md:w-full"
                src={picture}
                alt={alt}
              />
            </motion.div>
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export default RDArticles;
