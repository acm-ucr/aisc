import Landing from "@/components/home/Landing";
import Description from "@/components/home/Description";
import StatisticsBar from "@/components/home/StatisticsBar";
import ProjectCard from "@/components/projects/ProjectCard";
import { ProjectInfo } from "@/data/ProjectInfo";

const Home = () => {
  return (
    <>
      <Landing />
      <Description />
      <StatisticsBar />
      <div className="grid grid-cols-2 gap-4 p-10">
        {ProjectInfo.map(({ image, title, link }, index) => (
          <ProjectCard key={index} image={image} title={title} link={link} />
        ))}
      </div>
    </>
  );
};

export default Home;
