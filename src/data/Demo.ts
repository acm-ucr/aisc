import { StaticImageData } from "next/image";
import placeholder1 from "@/public/placeholders/ambiguous.webp";
import placeholder2 from "@/public/placeholders/competitive_projects.webp";
import placeholder3 from "@/public/placeholders/intern_event.webp";
import placeholder4 from "@/public/placeholders/projects.webp";

interface DemoTypes {
  text: string;
  image: StaticImageData;
}

const DemoData: DemoTypes[] = [
  {
    text: "presentation",
    image: placeholder1,
  },
  {
    text: "competitive projects",
    image: placeholder2,
  },
  {
    text: "intern event",
    image: placeholder3,
  },
  {
    text: "projects",
    image: placeholder4,
  },
];

export default DemoData;
