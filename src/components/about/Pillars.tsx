import Image from "next/image";
import pillarsImage from "@/public/aisc_logo.webp"; //replace with actual image

const Pillars = () => {
  return (
    <div className="bg-aisc-gray flex w-full flex-col gap-10 px-20 py-10 text-center text-white">
      <p className="text-2xl font-bold">Our 3 Pillars</p>
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
      <Image
        src={pillarsImage}
        alt="Add Alt here" //replace with actual alt
        className="h-[33vw] w-full rounded-4xl object-cover"
      />
    </div>
  );
};
export default Pillars;

const Pillar = (props: { title: string; description: string }) => {
  return (
    <div className="flex w-[20vw] flex-col gap-5">
      <p className="text-2xl font-bold">{props.title}</p>
      <p className="text-xl leading-6">{props.description}</p>
    </div>
  );
};
