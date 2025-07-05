import Image from "next/image";
import Logo from "@/public/aisc_logo.webp";

const HotelBookingApp = () => {
  return (
    <div className="m-3 flex h-2/3 w-full flex-row items-start bg-gradient-to-r from-white to-blue-300 p-3">
      <div className="flex w-1/2 flex-col items-start justify-center gap-2 p-2">
        <p className="font-aisc-main text-sm font-bold">Hotel Booking App</p>
        <p className="font-aisc-main text-sm">
          This project involves designing a hotel booking app to cater to
          travelers needs. The user-friendly platorm will provide a seemless
          booking experience for users.
        </p>
      </div>
      <Image
        className="h-40 w-60 rounded-2xl"
        src={Logo}
        alt="Hotel Booking App Logo"
      />
    </div>
  );
};

export default HotelBookingApp;
