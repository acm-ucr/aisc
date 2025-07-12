import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, link }) => {
  return (
    <div className="mx-auto flex h-120 w-145 flex-col">
      <div className="bg-aisc-gray/25 rounded-t-4xl">
        <Image src={image} alt={title} className="h-60 w-full object-cover" />
      </div>
      <div className="bg-aisc-lightgray/25 flex flex-col gap-4 rounded-b-4xl p-8">
        <p className="text-4xl">{title}</p>
        <Link href={link} className="text-xl hover:underline">
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
