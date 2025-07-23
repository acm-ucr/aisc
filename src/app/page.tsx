import Landing from "@/components/home/Landing";
import Description from "@/components/home/Description";
import StatisticsBar from "@/components/home/StatisticsBar";
import Projects from "@/components/home/Projects";
import WhatWeOffer from "@/components/home/WhatWeOffer";

const Home = () => {
  return (
    <>
      <Landing />
      <Description />
      <StatisticsBar />
      <WhatWeOffer />
      <Projects />
    </>
  );
};

export default Home;
