import ambiguous from "@/public/placeholders/ambiguous.webp";
import internEvent from "@/public/placeholders/intern_event.webp";
import womenInTech from "@/public/placeholders/women_in_tech_event.webp";
import workshop from "@/public/placeholders/workshop.webp";

import { StaticImageData } from "next/image";

export interface RDArticlesTypes {
  picture: StaticImageData;
  link: string;
  alt: string;
}

export const RDArticlesData: RDArticlesTypes[] = [
  {
    picture: ambiguous,
    link: "https://medium.com/@humansforai/ai-ml-in-autonomous-driving-3fbb992dcfc4",
    alt: "AI & ML in Autonomous Driving",
  },
  {
    picture: internEvent,
    link: "https://medium.com/@humansforai/natural-language-processing-simplified-49a7fe6c4dff",
    alt: "Natural Language Processing Simplified",
  },
  {
    picture: womenInTech,
    link: "https://medium.com/@humansforai/hidden-dangers-of-ai-deepfake-technology-a0a940951dc2",
    alt: "Hidden Dangers of AI: Deepfake Technology",
  },
  {
    picture: workshop,
    link: "https://medium.com/@humansforai/ai-can-learn-from-their-dreams-world-models-3018fb21602b",
    alt: "AI Can Learn From Their Dreams: World Models",
  },
];
