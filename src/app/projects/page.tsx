import ProjectGrid from "@/components/projects/ProjectGrid";
import Header from "@/components/Header";
import Placeholder from "@/public/placeholders/ambiguous.webp";

const Projects = () => {
  return (
    <>
      <Header text="Projects" image={Placeholder} alt="projects" />
      <ProjectGrid />
    </>
  );
};

export default Projects;
