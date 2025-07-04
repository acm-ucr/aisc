import Link from "next/link";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="bg-aisc-gray flex h-[70vh] w-full flex-col items-center justify-center">
      <div className="font-aisc-main pb-12 text-center text-6xl text-white">
        <div>UCR AI STUDENT</div>
        <div className="pt-2">COLLECTIVE</div>
      </div>
      <Button asChild className="bg-aisc-blue h-15 w-40 rounded-4xl text-4xl">
        <Link href="https:/linktr.ee/aiscucr" target="_blank">
          JOIN
        </Link>
      </Button>
    </div>
  );
};

export default Landing;
