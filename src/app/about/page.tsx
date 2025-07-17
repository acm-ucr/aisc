import RandD from "@/components/about/RandD";
import Pillars from "@/components/about/Pillars";
import AboutUs from "@/components/about/AboutUs";
import Header from "@/components/Header";
import Placeholder from "@/public/placeholders/ambiguous.webp";

const About = () => {
  return (
    <>
      <Header text="About Us" image={Placeholder} alt="about us" />
      <AboutUs />
      <Pillars />
      <RandD />;
    </>
  );
};

export default About;
