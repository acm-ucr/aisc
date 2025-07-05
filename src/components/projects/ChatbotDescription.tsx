import Image from "next/image";
import chatbotImage from "@/public/aisc_logo.webp"; //replace with actual image

const ChatbotDescription = () => {
  return (
    <div className="flex w-full flex-col gap-4 pt-10 pr-10 pl-7 text-right text-[20px]/7 text-pretty">
      <p className="font-bold"> Personal Assistant Chatbot </p>
      <div className="flex w-full flex-row gap-10">
        <Image
          src={chatbotImage}
          alt="Add Alt here" //replace with actual alt
          className="h-50 w-1/3 rounded-3xl"
          style={{ objectFit: "cover" }}
        />
        <p className="w-2/3">
          Make your own personal assisstant chatbot, designed to set reminders,
          answer questions, and even provide current weather updates! Gain
          Python skills in a practical scenario, get hands-on experience with
          chatbot development and learn Natural Languge Processing Concepts!
        </p>
      </div>
    </div>
  );
};
export default ChatbotDescription;
