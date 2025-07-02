import React from "react";
import { SiInstagram, SiDiscord } from "react-icons/si";
import { LiaLinkSolid } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

interface socialMedia {
  link: string;
  icon: React.ReactNode;
}

export const footerLinks: socialMedia[] = [
  {
    link: "https://www.linkedin.com/company/ai-student-collective/",
    icon: <FaLinkedinIn className="h-10 w-10" />,
  },
  {
    link: "https://www.instagram.com/aisc_riv/",
    icon: <SiInstagram className="h-10 w-10" />,
  },
  {
    link: "https://discord.com/invite/z9ngFH4DVt",
    icon: <SiDiscord className="h-10 w-10" />,
  },
  {
    link: "mailto:aiscriverside@humansforai.com",
    icon: <IoIosMail className="h-10 w-10" />,
  },

  {
    link: " https://humansforai.com/aisc/",
    icon: <LiaLinkSolid className="h-10 w-10" />,
  },
];
