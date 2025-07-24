import { Button } from "@/components/ui/button";
import Link from "next/link";

const Description = () => {
  return (
    <div className="mx-auto my-20 flex w-7/8 flex-col items-center text-center sm:w-3/4 lg:w-1/2">
      <p className="text-xl sm:text-2xl">
        Welcome to UCR&apos;s AI Student Collective!
      </p>
      <p className="my-4 text-base leading-6 text-balance sm:my-5 sm:text-xl lg:my-6">
        The Artificial Intelligence Student Collective at UC Riverside is a
        passionate student-led chapter committed to making AI education
        accessible, inclusive, and empowering. As part of the national AISC
        network, we aim to cultivate a space where students from all backgrounds
        can explore, build, and thrive in the world of AI and emerging
        technology.
      </p>
      <Button className="bg-aisc-blue hover:bg-aisc-black rounded-3xl text-base sm:text-xl">
        <Link href="/about">Learn more About Us!</Link>
      </Button>
    </div>
  );
};

export default Description;
