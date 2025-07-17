import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/public/aisc_logo.webp";
import { Button } from "@/components/ui/button";

const RandD = () => {
  return (
    <div className="mx-35 my-10 flex flex-col items-center justify-center">
      <div className="text-2xl font-semibold">R&D</div>
      <div className="grid grid-cols-2 justify-center gap-10 pt-10">
        <Image
          src={Placeholder}
          alt="Image"
          className="w-100 justify-self-center rounded-2xl"
        />
        <div className="grid-row-2 grid">
          <div className="pt-9 text-center text-xl">
            We write and publish articles related to AI research on medium's
            HumansForAI page with over 1K+ subscribers. Our team writes weekly
            newsletters with current job postings, AI industry updates and more!
          </div>
          <Button
            asChild
            className="bg-aisc-blue h-13 w-45 justify-self-center rounded-4xl text-xl"
          >
            <Link href="/rnd" target="_blank">
              LEARN MORE
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RandD;
