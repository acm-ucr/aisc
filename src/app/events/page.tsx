import Header from "@/components/Header";
import Placeholder from "@/public/placeholders/ambiguous.webp";
import Description from "@/components/events/Description";
import Calendar from "@/components/events/CalendarEvents";

const Events = () => {
  return (
    <>
      <Header text="Events" image={Placeholder} alt="events" />
      <Description />
      <Calendar />
    </>
  );
};

export default Events;
