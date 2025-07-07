import { Button } from "@/components/ui/button";
import Link from "next/link";

const Description = () => {
  return (
    <div className="mx-auto my-20 flex w-1/2 flex-col items-center text-center">
      <p className="w-1/2 text-2xl">
        Welcome to UCR&apos;s AI Student Collective!
      </p>
      <p className="my-6 text-xl leading-6 text-balance">
        The Artificial Intelligence Student Collective at UC Riverside is a
        passionate student-led chapter committed to making AI education
        accessible, inclusive, and empowering. As part of the national AISC
        network, we aim to cultivate a space where students from all backgrounds
        can explore, build, and thrive in the world of AI and emerging
        technology.
      </p>
      <Button className="bg-aisc-blue hover:bg-aisc-black rounded-3xl text-xl">
        <Link href="/about">Learn more About Us!</Link>
      </Button>
    </div>
  );
};

export default Description;
