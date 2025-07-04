const ChatbotDescription = () => {
  return (
    <div className="flex w-full flex-row pt-5 text-[20px]">
      <div className="flex w-1/3 bg-white"> </div>
      <div className="m-3 flex w-2/3 flex-col gap-5 text-right text-pretty">
        <div className="flex w-full bg-white font-bold">
          <p> Personal Assistant Chatbot </p>
        </div>
        <div className="flex w-full bg-white">
          <p>
            {" "}
            Make your own personal assisstant chatbot, designed to set
            reminders, answer questions, and even provide current weather
            updates! Gain Python skills in a practical scenario, get hands-on
            experience with chatbot development and learn Natural Language
            Processing Concepts!
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChatbotDescription;
