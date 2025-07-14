import Image from "next/image";
import pillarsImage from "@/public/placeholders/workshop.webp"; //replace with actual image

const Pillars = () => {
  return (
    <div className="bg-aisc-gray flex w-full flex-col gap-10 px-20 py-10 text-center text-white">
      <p className="text-3xl font-bold">Our 3 Pillars</p>
      <div className="flex w-full flex-row place-content-between">
        <Pillar
          title="ACCESSIBILITY"
          description="Promoting AI accessibility for all by breaking down the barriers to knowledge and opportunity"
        />
        <Pillar
          title="LITERACY"
          description="Empowering students with enriching resources and experiences to shape the future"
        />
        <Pillar
          title="DIVERSITY"
          description="Celebrating diversity in AI, fostering innovation through varied perspectives"
        />
      </div>
      <div className = "w-full px-7"> 
        <Image
          src={pillarsImage}
          alt="Add Alt here" //replace with actual alt
          className="h-[33vh] w-full object-cover rounded-4xl"
        />
      </div>
    </div>
  );
};
export default Pillars;

const Pillar = ({ title, description}) => {
  return (
    <div className="flex w-[20vw] flex-col gap-5">
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-2xl leading-6">{description}</p>
    </div>
  );
};
