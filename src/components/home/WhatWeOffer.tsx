import Image from "next/image";
import internEventImage from "@/public/placeholders/intern_event.webp";
import projectsImage from "@/public/placeholders/projects.webp";
import competitive from "@/public/placeholders/competitive_projects.webp";
import speakerEventImage from "@/public/placeholders/speaker_event.webp";

const WhatWeOffer = () => {
  return (
    <>
      <div className="mx-auto mt-5 flex w-3/4 flex-col items-center text-center md:mt-20 md:w-1/2">
        <p className="w-1/2 text-xl font-semibold md:text-3xl">What We Offer</p>
        <p className="my-6 hidden text-xl md:block">
          From hands-on technical workshops and speaker panels to career
          development events and interdisciplinary projects, AISC Riverside
          offers opportunities to grow in technical, creative, and
          entrepreneurial directions. Whether you're just curious about AI or
          building your own model from scratch, you'll find a supportive,
          inspiring community here. Join us and help shape the future of AI at
          UCR!
        </p>
      </div>
      <div className="mx-8 my-5 flex flex-wrap items-center justify-center gap-5 text-center text-sm md:mb-20 md:w-11/12 md:space-x-10 md:text-2xl lg:text-3xl">
        <div className="flex flex-col items-center">
          <Image
            src={internEventImage}
            alt="Intern Event"
            className="mb-5 h-[35vw] w-[40vw] overflow-hidden rounded-3xl object-cover md:h-[15vw] md:w-[17vw]"
          />

          <p>NETWORKING</p>
          <p>EVENTS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={projectsImage}
            alt="Projects"
            className="mb-5 h-[35vw] w-[40vw] overflow-hidden rounded-3xl object-cover md:h-[15vw] md:w-[17vw]"
          />

          <p>TECHNICAL</p>
          <p>CONSULTING</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={competitive}
            alt="Competitive Projects"
            className="mb-5 h-[35vw] w-[40vw] overflow-hidden rounded-3xl object-cover md:h-[15vw] md:w-[17vw]"
          />

          <p>CASE</p>
          <p>COMPETITIONS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={speakerEventImage}
            alt="Speaker Event"
            className="mb-5 h-[35vw] w-[40vw] overflow-hidden rounded-3xl object-cover md:h-[15vw] md:w-[17vw]"
          />
          <p>DYNAMIC</p>
          <p>WORKSHOPS</p>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
