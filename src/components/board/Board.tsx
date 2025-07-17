import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LinkedinLogo from "@/public/linkedin_logo.webp";

type Properties = {
  headshot: StaticImageData;
  name: string;
  role: string;
  linkedin: string;
};

const Board = ({ headshot, name, role, linkedin }: Properties) => {
  return (
    <div className="m-10 w-56 flex-col text-center">
      <Image
        src={headshot}
        alt="headshot"
        className="rounded-full object-center"
      />
      <div className="pt-4 text-2xl font-semibold">{name}</div>
      <div className="pt-4 text-2xl">{role}</div>
      <div className="items-center justify-center pt-4">
        <Link href={linkedin}>
          <Image src={LinkedinLogo} alt="linkedin" className="mx-auto w-15" />
        </Link>
      </div>
    </div>
  );
};

export default Board;
