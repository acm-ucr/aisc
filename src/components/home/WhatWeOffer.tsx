import Image from "next/image";
import internEventImage from "@/public/placeholders/intern_event.webp";
import projectsImage from "@/public/placeholders/projects.webp";
import competitive from "@/public/placeholders/competitive_projects.webp";
import speakerEventImage from "@/public/placeholders/speaker_event.webp";

const WhatWeOffer = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-1/2 flex-col items-center text-center">
        <p className="w-1/2 text-2xl font-semibold">What we Offer</p>
        <p className="my-6 text-xl">
          From hands-on technical workshops and speaker panels to career
          development events and interdisciplinary projects, AISC Riverside
          offers opportunities to grow in technical, creative, and
          entrepreneurial directions. Whether you're just curious about AI or
          building your own model from scratch, you'll find a supportive,
          inspiring community here. Join us and help shape the future of AI at
          UCR!
        </p>
      </div>
      <div className="mx-auto mt-5 mb-20 flex w-11/12 flex-row items-center justify-center space-x-10 text-center text-3xl">
        <div className="flex flex-col">
          <Image
            src={internEventImage}
            alt="Intern Event"
            className="mb-5 h-[15vw] w-[17vw] overflow-hidden rounded-3xl object-cover"
          />

          <p>NETWORKING</p>
          <p>EVENTS</p>
        </div>
        <div className="flex flex-col">
          <Image
            src={projectsImage}
            alt="Projects"
            className="mb-5 h-[15vw] w-[17vw] overflow-hidden rounded-3xl object-cover"
          />

          <p>TECHNICAL</p>
          <p>CONSULTING</p>
        </div>
        <div className="flex flex-col">
          <Image
            src={competitive}
            alt="Competitive Projects"
            className="mb-5 h-[15vw] w-[17vw] overflow-hidden rounded-3xl object-cover"
          />

          <p>CASE</p>
          <p>COMPETITIONS</p>
        </div>

        <div className="flex flex-col">
          <Image
            src={speakerEventImage}
            alt="Speaker Event"
            className="mb-5 h-[15vw] w-[17vw] overflow-hidden rounded-3xl object-cover"
          />
          <p>DYNAMIC</p>
          <p>WORKSHOPS</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
