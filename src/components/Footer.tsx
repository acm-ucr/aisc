"use client";
import Link from "next/link";
import { footerLinks } from "@/data/FooterLinks";
import AISClogo from "@/public/aisc_logo.webp";
import Image from "next/image";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <>
      <span className="from-aisc-pink to-aisc-blue block h-1 w-full bg-gradient-to-r" />

      <div className="font-aisc-main bg-aisc-black flex flex-row items-center justify-between p-4 px-7 text-white sm:text-xl md:px-14 md:pt-10 md:pb-18 md:text-2xl lg:text-3xl">
        <Link className="block md:hidden" href={"/"}>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
            <Image src={AISClogo} alt="logo" className="w-10" />
          </motion.div>
        </Link>
        <Link className="hidden md:block" href={"/"}>
          <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.04 }}>
            UCR AI Student Collective
          </motion.div>
        </Link>

        <div className="flex flex-row space-x-8 md:space-x-14">
          {footerLinks.map(({ link, icon }, index) => (
            <Link
              key={index}
              className="flex items-center justify-center max-md:w-6"
              href={link}
              target="_blank"
            >
              <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                {icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
