import Landing from "@/components/home/Landing";
import Description from "@/components/home/Description";
import StatisticsBar from "@/components/home/StatisticsBar";
import Projects from "@/components/home/Projects";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import CarouselDemo from "@/components/home/Carousel";

const Home = () => {
  return (
    <>
      <Landing />
      <Description />
      <CarouselDemo />
      <StatisticsBar />
      <WhatWeOffer />
      <Projects />
    </>
  );
};

export default Home;
