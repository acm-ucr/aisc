import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, link }) => {
  return (
    <div className="mx-auto flex w-4/5 flex-col">
      <Image
        src={image}
        alt={title}
        className="bg-aisc-gray/25 h-[30vh] w-full rounded-t-4xl object-cover"
      />
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
