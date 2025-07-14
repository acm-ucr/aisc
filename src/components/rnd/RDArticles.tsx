import { RDArticlesData } from "./RDArticlesData";
import Image from "next/image";

const RDArticles = () => {
  return (
    <>
      <div className="grid h-[500px] grid-cols-3 grid-rows-2 gap-x-8 gap-y-20 px-40 py-10">
        {RDArticlesData.map((article, index) => (
          <a key={index} href={article.Link}>
            <div className="bg-aisc-gray/10 relative h-full w-full rounded-4xl">
              <Image src={article.Picture} alt={article.Alt} fill={true} />
            </div>
          </a>
        ))}
        <div className="bg-aisc-gray/10 h-full w-full rounded-4xl" />
        <div className="bg-aisc-gray/10 h-full w-full rounded-4xl" />
      </div>
    </>
  );
};

export default RDArticles;
