import ChatbotDescription from "@/components/projects/ChatbotDescription";
import HotelBookingApp from "@/components/projects/HotelBookingApp";
import SkinLesionsDescription from "@/components/projects/SkinLesionsDescription";
import CarPriceDescription from "@/components/projects/CarPriceDescription";
import Header from "@/components/Header";
import Placeholder from "@/public/placeholders/ambiguous.webp";

const Projects = () => {
  return (
    <>
      <Header text="Projects" image={Placeholder} alt="projects" />
      <ChatbotDescription />
      <HotelBookingApp />
      <SkinLesionsDescription />
      <CarPriceDescription />
    </>
  );
};

export default Projects;
