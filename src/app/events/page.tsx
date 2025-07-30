import Header from "@/components/Header";
import Placeholder from "@/public/placeholders/ambiguous.webp";
import Description from "@/components/events/Description";

const Events = () => {
  return (
    <>
      <Header text="Events" image={Placeholder} alt="events" />
      <Description />
    </>
  );
};

export default Events;
