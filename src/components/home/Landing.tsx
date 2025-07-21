import Link from "next/link";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="bg-aisc-gray flex h-[70vh] w-full flex-col items-center justify-center">
      <div className="font-aisc-main pb-6 text-center text-4xl text-white sm:pb-8 sm:text-5xl lg:pb-12 lg:text-6xl">
        <div>UCR AI STUDENT</div>
        <div className="sm:pt-1 lg:pt-2">COLLECTIVE</div>
      </div>
      <Button
        asChild
        className="bg-aisc-blue h-9 w-24 rounded-4xl text-2xl sm:h-12 sm:w-32 sm:text-3xl lg:h-15 lg:w-40 lg:text-4xl"
      >
        <Link href="https:/linktr.ee/aiscucr" target="_blank">
          JOIN
        </Link>
      </Button>
    </div>
  );
};

export default Landing;
