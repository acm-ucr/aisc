import { RDArticlesData } from "@/data/RDArticlesData";
import Image from "next/image";

const RDArticles = () => {
  return (
    <div className="grid grid-cols-1 gap-10 px-8 py-8 md:grid-cols-3 md:grid-rows-2 md:px-20 lg:px-40">
      {RDArticlesData.map(({ Link, Picture, Alt }, index) => (
        <a key={index} href={Link} target="_blank" className="flex flex-col">
          <Image
            className="bg-aisc-gray/10 mx-auto h-[25vh] w-2/3 rounded-4xl object-cover md:w-full"
            src={Picture}
            alt={Alt}
          />
        </a>
      ))}
    </div>
  );
};

export default RDArticles;
