import Link from "next/link";
import { footerLinks, Address } from "../data/FooterLinks";

const Footer = () => {
  return (
    <div className="font-aisc-main bg-aisc-black flex flex-row items-center justify-between px-14 pt-10 pb-18 text-white sm:text-xl md:text-2xl lg:text-3xl">
      <div id="footer-information" className="flex flex-col space-y-3">
        <Link href={"/"}>UCR AI Student Collective</Link>
        <p>{Address.address}</p>
      </div>
      <div className="flex flex-row space-x-14">
        {footerLinks.map(({ link, icon }) => (
          <div key={link} className="flex items-center justify-center">
            <Link href={link}>{icon}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
