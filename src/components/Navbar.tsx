"use client";

import tags from "@/data/NavbarData";
import Link from "next/link";
import Image from "next/image";
import AISClogo from "@/public/aisc_logo.webp";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const pathName = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="from-aisc-blue to-aisc-pink font-aisc-main bg-linear-to-r/shorter">
      <div className="flex items-center justify-between px-4 py-4 text-white md:hidden">
        <Link href="/" className="flex items-center gap-4">
          <Image src={AISClogo} alt="logo" className="w-10" />
          <div className="text-2xl">UCR AISC</div>
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-3xl text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/*Desktop*/}
      <div className="hidden justify-between py-4 text-white md:flex lg:flex">
        <Link
          href="/"
          className="ml-[2%] flex items-center gap-4 hover:scale-105"
        >
          <Image src={AISClogo} alt="logo" className="w-10" />
          <div className="text-3xl">UCR AISC</div>
        </Link>

        <div className="mr-[3%] hidden items-center gap-8 text-2xl transition md:flex lg:flex lg:gap-14 lg:text-3xl">
          {tags.map(({ link, title }) => (
            <div key={link}>
              <Link
                href={link}
                className={`inline-block transition-transform duration-150 ${
                  pathName === link
                    ? "text-aisc-yellow hover:scale-105"
                    : "hover:scale-105"
                }`}
              >
                {title}
              </Link>
            </div>
          ))}
          <Link
            href="https:/linktr.ee/aiscucr"
            className="duration 150 flex items-center rounded-full bg-white px-6 py-2 text-black hover:scale-105 md:px-6 lg:px-8"
            target="_blank"
          >
            <div className="text-2xl lg:text-3xl">Join</div>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="from-aisc-blue to-aisc-pink font-aisc-main z-50 flex w-full flex-col bg-linear-to-r/shorter px-6 text-2xl text-white shadow-lg transition-all duration-200 ease-in-out md:hidden">
          {tags.map(({ link, title }) => (
            <Link
              href={link}
              key={link}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-center underline-offset-2 transition hover:underline ${
                pathName === link ? "text-aisc-yellow underline" : "underline"
              }`}
            >
              {title}
            </Link>
          ))}
          <Link
            href="https:/linktr.ee/aiscucr"
            target="_blank"
            className="mb-2 text-center underline underline-offset-2 transition"
          >
            Join
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
