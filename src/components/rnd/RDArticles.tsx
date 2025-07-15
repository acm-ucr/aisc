import { RDArticlesData } from "../../data/RDArticlesData";
import Image from "next/image";

const RDArticles = () => {
  return (
    <>
      <div className="grid h-[75vh] grid-cols-3 grid-rows-2 gap-10 px-40 py-10">
        {RDArticlesData.map(({ Link, Picture, Alt}, index) => (
          <a key={index} href={Link}>
            <Image className="bg-aisc-gray/10 relative h-full w-full rounded-4xl object-cover" src={Picture} alt={Alt} width={500} height={500} />
          </a>
        ))}
      </div>
    </>
  );
};

export default RDArticles;
