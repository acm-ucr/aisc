"use client";

import { tags } from "@/data/NavbarData";
import Link from "next/link";
import Image from "next/image";
import AISClogo from "@/public/aisc_logo.webp";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="from-aisc-blue to-aisc-pink font-aisc-main bg-linear-to-r/shorter">
      <div className="flex justify-between py-4 text-white">
        <Link href="/" className="ml-[2%] flex items-center gap-4">
          <Image src={AISClogo} alt="logo" className="w-10" />
          <div className="text-2xl lg:text-3xl">UCR AISC</div>
        </Link>

        <div className="mr-[3%] flex items-center gap-8 text-2xl transition lg:gap-14 lg:text-3xl">
          {tags.map(({ link, title }) => (
            <div key={link}>
              <Link
                href={link}
                className={`${
                  pathName === link
                    ? "text-aisc-yellow"
                    : "duration-150 hover:scale-110"
                }`}
              >
                {title}
              </Link>
            </div>
          ))}
          <Link
            href="/"
            className="duration 150 flex items-center rounded-full bg-white px-6 py-2 text-black hover:scale-105 md:px-6 lg:px-8"
          >
            <div className="text-2xl lg:text-3xl">Join</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
