"use client";
import { Button } from "@/components/ui/button";
const NotFound = () => {
  const textStyle =
    "[text-shadow:-1px_-1px_0_#FFF,1px_-1px_0_#FFF,-1px_1px_0_#FFF,1px_1px_0_#FFF,2px_4px_4.4px_#51B7FF]";

  return (
    <div className="from-aisc-pink to-aisc-blue flex min-h-screen min-w-screen items-center justify-center bg-gradient-to-r">
      <div className="from-aisc-blue to-aisc-pink rounded-2xl bg-gradient-to-r p-[3px]">
        <div className="bg-aisc-gray flex h-full w-full flex-col items-center justify-center rounded-2xl px-110 py-15">
          <p className={`${textStyle} font-aisc-alt text-[128px]`}>404</p>
          <p className={`${textStyle} font-aisc-alt mb-10 text-6xl text-white`}>
            ERROR
          </p>
          <Button
            className="from-aisc-blue to-aisc-pink rounded-2xl bg-gradient-to-r px-20 py-10 text-6xl font-semibold text-white"
            asChild
            variant="secondary"
            size="lg"
          >
            <a href="/">Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
