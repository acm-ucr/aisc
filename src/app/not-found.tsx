"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  const textStyle =
    "[text-shadow:-1px_-1px_0_#FFF,1px_-1px_0_#FFF,-1px_1px_0_#FFF,1px_1px_0_#FFF,2px_4px_4.4px_#51B7FF]";

  return (
    <div className="from-aisc-pink to-aisc-blue flex min-h-screen min-w-screen items-center justify-center bg-gradient-to-r">
      <div className="from-aisc-blue to-aisc-pink flex flex-col rounded-2xl bg-gradient-to-r p-[3px]">
        <div className="bg-aisc-gray font-aisc-alt h-full w-full rounded-2xl px-80 py-30">
          <p className={`${textStyle} text-9xl`}>404</p>
          <p className={`${textStyle} text-6xl`}>ERROR</p>
          <Button onClick={() => router.push("/")}>Home</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
