import Image from "next/image";
import Logo from "@/public/aisc_logo.webp";

const SkinLesionsDescription = () => {
  return (
    <div className="flex items-center bg-white p-3">
      <div className="flex w-1/3 justify-center">
        <Image
          className="rounded-xl object-cover"
          src={Logo}
          alt="AISC Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="w-2/3 px-4 text-right">
        <p className="mb-0.5 flex-col text-xl font-bold text-black">
          Skin Lesions Classification System
        </p>
        <p className="text-l text-black">
          Design a machine-learning model that utilizes computer vision to
          determine if a skin lesion is benign or malignant! Learn how to
          process medical data, check your model for biases, and utilize Python
          in a practical, real-world scenario!
        </p>
      </div>
    </div>
  );
};
export default SkinLesionsDescription;
