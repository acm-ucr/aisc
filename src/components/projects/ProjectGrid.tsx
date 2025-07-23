import LeftAlignedProject from "./LeftAlignedProject";
import RightAlignedProject from "./RightAlignedProject";
import ProjectsData from "@/data/ProjectsData";

const ProjectGrid = () => {
  return (
    <div className="relative grid grid-cols-1 gap-2">
      {ProjectsData.map(({ image, title, description }, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <LeftAlignedProject
              image={image}
              title={title}
              description={description}
            />
          ) : (
            <RightAlignedProject
              image={image}
              title={title}
              description={description}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
