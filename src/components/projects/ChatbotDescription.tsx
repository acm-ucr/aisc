import Image from "next/image";
import chatbotImage from "@/public/aisc_logo.webp"; //replace with actual image

const ChatbotDescription = () => {
  return (
    <div className="flex w-full flex-row gap-10 p-10 text-right text-xl/7">
      <Image
        src={chatbotImage}
        alt="Add Alt here" //replace with actual alt
        className="w-[40vw] rounded-3xl object-cover md:h-50"
      />
      <div className="flex w-full flex-col gap-5">
        <p className="font-bold"> Personal Assistant Chatbot </p>
        <p>
          Make your own personal assistant chatbot, designed to set reminders,
          answer questions, and even provide current weather updates! Gain
          Python skills in a practical scenario, get hands-on experience with
          chatbot development and learn Natural Languge Processing Concepts!
        </p>
      </div>
    </div>
  );
};
export default ChatbotDescription;
