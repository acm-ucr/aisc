import Link from "next/link";
import { footerLinks } from "@/data/FooterLinks";
import AISClogo from "@/public/aisc_logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <span className="from-aisc-blue to-aisc-pink block h-1 w-full bg-gradient-to-r" />

      <div className="font-aisc-main bg-aisc-black flex flex-row items-center justify-between p-4 px-7 text-white sm:text-xl md:px-14 md:pt-10 md:pb-18 md:text-2xl lg:text-3xl">
        <Link className="block md:hidden" href={"/"}>
          <Image src={AISClogo} alt="logo" className="w-10" />
        </Link>
        <Link className="hidden md:block" href={"/"}>
          UCR AI Student Collective
        </Link>

        <div className="flex flex-row space-x-8 md:space-x-14">
          {footerLinks.map(({ link, icon }, index) => (
            <Link
              key={index}
              className="flex items-center justify-center max-md:w-6"
              href={link}
              target="_blank"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
