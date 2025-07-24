import ambiguous from "@/public/placeholders/ambiguous.webp";
import internEvent from "@/public/placeholders/intern_event.webp";
import womenInTech from "@/public/placeholders/women_in_tech_event.webp";

import { StaticImageData } from "next/image";

export interface CarouselData {
  Picture: StaticImageData;
  Alt: string;
}

export const CarouselData: CarouselData[] = [
  {
    Picture: ambiguous,
    Alt: "AI & ML in Autonomous Driving",
  },
  {
    Picture: internEvent,
    Alt: "Natural Language Processing Simplified",
  },
  {
    Picture: womenInTech,
    Alt: "Hidden Dangers of AI: Deepfake Technology",
  },
];
