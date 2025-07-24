import ambiguous from "@/public/placeholders/ambiguous.webp";
import internEvent from "@/public/placeholders/intern_event.webp";
import womenInTech from "@/public/placeholders/women_in_tech_event.webp";
import workshop from "@/public/placeholders/workshop.webp";

import { StaticImageData } from "next/image";

export interface RDArticlesData {
  Picture: StaticImageData;
  Link: string;
  Alt: string;
}

export const RDArticlesData: RDArticlesData[] = [
  {
    Picture: ambiguous,
    Link: "https://medium.com/@humansforai/ai-ml-in-autonomous-driving-3fbb992dcfc4",
    Alt: "AI & ML in Autonomous Driving",
  },
  {
    Picture: internEvent,
    Link: "https://medium.com/@humansforai/natural-language-processing-simplified-49a7fe6c4dff",
    Alt: "Natural Language Processing Simplified",
  },
  {
    Picture: womenInTech,
    Link: "https://medium.com/@humansforai/hidden-dangers-of-ai-deepfake-technology-a0a940951dc2",
    Alt: "Hidden Dangers of AI: Deepfake Technology",
  },
  {
    Picture: workshop,
    Link: "https://medium.com/@humansforai/ai-can-learn-from-their-dreams-world-models-3018fb21602b",
    Alt: "AI Can Learn From Their Dreams: World Models",
  },
];
