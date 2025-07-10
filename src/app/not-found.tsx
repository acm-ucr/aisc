"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="from-aisc-pink to-aisc-blue flex h-screen w-full items-center justify-center bg-gradient-to-r pb-24">
      <div className="from-aisc-blue to-aisc-pink h-8/12 w-9/12 rounded-2xl bg-gradient-to-r p-[3px]">
        <div className="bg-aisc-gray flex h-full w-full flex-col items-center justify-center gap-y-8 rounded-2xl p-15">
          <div className="flex flex-col items-center justify-center">
            <p
              className={`font-aisc-alt text-9xl`}
              style={{
                textShadow: `
                -1px -1px 0 #FFF,
                1px -1px 0 #FFF,
                -1px 1px 0 #FFF,
                1px 1px 0 #FFF,
                2px 4px 4.4px #51B7FF
        `,
              }}
            >
              404
            </p>
            <p
              className={`font-aisc-alt mb-10 text-6xl text-white`}
              style={{
                textShadow: `
                -1px -1px 0 #FFF,
                1px -1px 0 #FFF,
                -1px 1px 0 #FFF,
                1px 1px 0 #FFF,
                2px 4px 4.4px #51B7FF
              `,
              }}
            >
              ERROR
            </p>
          </div>

          <Button
            className="from-aisc-blue to-aisc-pink h-2/12 w-3/12 rounded-2xl bg-gradient-to-r text-3xl font-semibold text-white md:text-7xl"
            asChild
            variant="secondary"
            size="lg"
          >
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
