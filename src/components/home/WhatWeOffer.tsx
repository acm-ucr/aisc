import Image from "next/image";
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
      <div className="font-aisc-main mx-auto mt-5 mb-20 flex w-11/12 flex-row items-center justify-center space-x-10 text-center text-3xl">
        <div className="flex flex-col">
          <div className="relative mb-5 h-66 w-70 overflow-hidden rounded-3xl">
            <Image
              src="../placeholders/intern_event.webp"
              alt="Intern Event"
              className="object-cover"
              fill
            />
          </div>

          <h1>NETWORKING</h1>
          <h1>EVENTS</h1>
        </div>
        <div className="flex flex-col">
          <div className="relative mx-auto mb-5 h-66 w-75 overflow-hidden rounded-3xl">
            <Image
              src="../placeholders/projects.webp"
              alt="Projects"
              className="object-cover"
              fill
            />
          </div>
          <h1>TECHNICAL</h1>
          <h1>CONSULTING</h1>
        </div>
        <div className="flex flex-col">
          <div className="relative mx-auto mb-5 h-66 w-75 overflow-hidden rounded-3xl">
            <Image
              src="../placeholders/competitive_projects.webp"
              alt="Competitive Projects"
              className="object-cover"
              fill
            />
          </div>
          <h1>CASE</h1>
          <h1>COMPETITIONS</h1>
        </div>

        <div className="flex flex-col">
          <div className="relative mx-auto mb-5 h-66 w-75 overflow-hidden rounded-3xl">
            <Image
              src="../placeholders/speaker_event.webp"
              alt="Speaker Event"
              className="object-cover"
              fill
            />
          </div>
          <h1>DYNAMIC</h1>
          <h1>WORKSHOPS</h1>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
