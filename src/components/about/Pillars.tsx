import Image from "next/image";
import pillarsImage from "@/public/placeholders/workshop.webp"; //replace with actual image

const Pillars = () => {
  return (
    <div className="bg-aisc-gray place_content_evenly flex w-full flex-col gap-10 px-20 py-10 text-center text-white">
      <p className="text-3xl font-bold">Our 3 Pillars</p>
      <div className="flex flex-row place-content-between">
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
        className="mx-auto h-[70vh] w-9/10 rounded-4xl object-cover"
      />
    </div>
  );
};
export default Pillars;

const Pillar = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex w-[20vw] flex-col gap-5">
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-2xl leading-7">{description}</p>
    </div>
  );
};
