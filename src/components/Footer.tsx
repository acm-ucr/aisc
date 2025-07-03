import Link from "next/link";
import { footerLinks } from "@/data/FooterLinks";

const Footer = () => {
  return (
    <>
      <span className="from-aisc-blue to-aisc-pink block h-1 w-full bg-gradient-to-r" />

      <div className="font-aisc-main bg-aisc-black flex flex-row items-center justify-between px-14 pt-10 pb-18 text-white sm:text-xl md:text-2xl lg:text-3xl">
        <Link href={"/"}>UCR AI Student Collective</Link>

        <div className="flex flex-row space-x-14">
          {footerLinks.map(({ link, icon }, index) => (
            <Link
              key={index}
              className="flex items-center justify-center"
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
