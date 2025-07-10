import Image from "next/image";
import Logo from "@/public/aisc_logo.webp";

const CarPriceDescription = () => {
  return (
    <div className="to-aisc-blue/50 flex flex-row bg-gradient-to-r from-white p-5">
      <div className="flex w-2/3 flex-col gap-2 p-5">
        <p className="text-2xl font-bold">Car Price Predictor</p>
        <p className="text-xl">
          Join our journey into the exciting world of data science as we dive
          into the topic of predictive modeling!
        </p>
      </div>
      <Image
        className="mx-auto h-[20vh] w-[25vw] rounded-2xl object-cover"
        src={Logo}
        alt="Car Price Predictor Logo"
      />
    </div>
  );
};

export default CarPriceDescription;
