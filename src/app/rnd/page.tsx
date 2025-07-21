import Description from "@/components/rnd/Description";
import RDArticles from "@/components/rnd/RDArticles";
import Header from "@/components/Header";
import Placeholder from "@/public/placeholders/ambiguous.webp";

const RND = () => {
  return (
    <>
      <Header text="R&D" image={Placeholder} alt="rnd" />
      <Description />
      <RDArticles />
    </>
  );
};

export default RND;
