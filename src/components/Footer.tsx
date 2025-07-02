import Link from "next/link";
import { footerLinks, Address } from "../data/FooterLinks";

const Footer = () => {
  return (
    <div className="font-aisc-main text-aisc-lightgray bg-aisc-black flex flex-row items-center justify-between p-4 text-2xl">
      <div id="footer-information" className="flex flex-col">
        <Link href={"/"}>UCR AI Student Collective</Link>
        <p>{Address.address}</p>
      </div>
      <div className="flex flex-row space-x-5">
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
