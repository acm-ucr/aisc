import Image from "next/image";
import Placeholder from "@/public/placeholders/ambiguous.webp";

const Description = () => {
  return (
    <>
      <div className="my-5 flex flex-col p-10 md:flex-row md:gap-10 xl:gap-18">
        <div className="flex flex-col items-center gap-2">
          <p className="self-start text-2xl font-bold">Lorem Ipsum</p>
          <Image
            className="h-1/4 w-full rounded-4xl object-contain md:object-cover"
            src={Placeholder}
            alt="Placeholder Event"
          />
          <p className="h-1/4 p-8 text-center text-lg">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="self-start text-2xl font-bold">Lorem Ipsum</p>
          <Image
            className="h-1/4 w-full rounded-4xl object-contain md:object-cover"
            src={Placeholder}
            alt="Placeholder Event"
          />
          <p className="p-8 text-center text-lg">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="self-start text-2xl font-bold">Lorem Ipsum</p>
          <Image
            className="h-1/4 w-full rounded-4xl object-contain md:object-cover"
            src={Placeholder}
            alt="Placeholder Event"
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
