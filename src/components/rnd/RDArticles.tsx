import { RDArticlesData } from "@/data/RDArticlesData";
import Image from "next/image";

const RDArticles = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 px-12 py-5 md:h-[75vh] md:grid-cols-3 md:grid-rows-2 md:px-40 md:py-10">
        {RDArticlesData.map(({ Link, Picture, Alt }, index) => (
          <a key={index} href={Link}>
            <Image
              className="bg-aisc-gray/10 h-[25vh] w-full rounded-4xl object-cover md:h-full"
              src={Picture}
              alt={Alt}
              width={500}
              height={500}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default RDArticles;
