import ProjectCard from "@/components/home/ProjectCard";
import { RDArticlesTypes, RDArticlesData } from "@/data/RDArticlesData";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
      {RDArticlesData.map(({ picture, alt, link }: RDArticlesTypes, index) => (
        <ProjectCard key={index} image={picture} title={alt} link={link} />
      ))}
    </div>
  );
};

export default Projects;
