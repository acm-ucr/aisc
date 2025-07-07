import Image from "next/image";
import Logo from "@/public/aisc_logo.webp";

const HotelBookingApp = () => {
  return (
    <div className="to-aisc-blue/50 flex flex-row items-start bg-gradient-to-r from-white p-3">
      <div className="flex w-2/3 flex-col gap-2 p-5">
        <p className="text-xl font-bold">Hotel Booking App</p>
        <p className="text-lg">
          This project involves designing a hotel booking app to cater to
          travelers needs. The user-friendly platorm will provide a seemless
          booking experience for users.
        </p>
      </div>
      <Image
        className="mx-auto h-[20vh] w-[25vw] rounded-2xl"
        src={Logo}
        alt="Hotel Booking App Logo"
      />
    </div>
  );
};

export default HotelBookingApp;
