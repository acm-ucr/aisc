import ProjectCard from "@/components/home/ProjectCard";
import ProjectInfo from "@/data/ProjectInfo";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-10 p-10">
      {ProjectInfo.map(({ image, title, link }, index) => (
        <ProjectCard key={index} image={image} title={title} link={link} />
      ))}
    </div>
  );
};

export default Projects;
