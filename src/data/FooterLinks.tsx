import React from "react";
import { SiInstagram, SiDiscord } from "react-icons/si";

import { LiaLinkSolid } from "react-icons/lia";

import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

interface socialMedia {
  link: string;
  icon: React.ReactNode;
}

export const footerLinks: socialMedia[] = [
  {
    link: "https://www.linkedin.com/company/ai-student-collective/",
    icon: <FaLinkedinIn />,
  },
  {
    link: "https://www.instagram.com/aisc_riv/",
    icon: <SiInstagram />,
  },
  {
    link: "https://discord.com/invite/z9ngFH4DVt",
    icon: <SiDiscord />,
  },
  {
    link: "mailto:aiscriverside@humansforai.com",
    icon: <CiMail />,
  },

  { link: " https://humansforai.com/aisc/", icon: <LiaLinkSolid /> },
];

export const Address = {
  address: "Address",
};
