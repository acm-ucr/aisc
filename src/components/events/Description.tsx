import Image from "next/image";
import Placeholder from "@/public/placeholders/ambiguous.webp";

const Description = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-18 p-10 my-5">
        <div className="flex flex-col items-center gap-2">
          <p className="self-start text-2xl font-bold">Lorem Ipsum</p>
          <Image
            className="h-1/4 w-full rounded-4xl object-cover"
            src={Placeholder}
            alt="Placeholder Event"
            width={0}
            height={0}
          />
          <p className="p-8 text-center text-lg">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="self-start text-2xl font-bold">Lorem Ipsum</p>
          <Image
            className="h-1/4 w-full rounded-4xl object-cover"
            src={Placeholder}
            alt="Placeholder Event"
            width={0}
            height={0}
          />
          <p className="p-8 text-center text-lg">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="self-start text-2xl font-bold">Lorem Ipsum</p>
          <Image
            className="h-1/4 w-full rounded-4xl object-cover"
            src={Placeholder}
            alt="Placeholder Event"
            width={0}
            height={0}
          />
          <p className="p-8 text-center text-lg">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
