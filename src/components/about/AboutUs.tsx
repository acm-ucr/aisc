import Image from "next/image";
import aboutUsImageOne from "@/public/placeholders/women_in_tech_event.webp";
import aboutUsImageTwo from "@/public/placeholders/ambiguous.webp";

const aboutUsContent = [
  {
    title: "Our Values",
    image: aboutUsImageOne,
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
  {
    title: "Our Mission",
    image: aboutUsImageTwo,
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white px-4 py-12">
      <p className="mb-10 text-center text-3xl font-semibold">About Us</p>
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        {aboutUsContent.map((item, index) => (
          <div
            key={index}
            className="flex max-w-sm flex-col items-center text-center"
          >
            <div className="relative mb-4 h-[200px] w-[300px] overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover"
                fill
              />
            </div>
            <p className="mb-2 text-xl font-medium">{item.title}</p>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
