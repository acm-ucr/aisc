import DemoData from "@/data/Demo";
import Image from "next/image";
const Demo = () => {
  return (
    <div className="grid w-1/2 grid-cols-2 gap-1 p-5">
      {DemoData.map(({ text, image }, index) => (
        <div key={index} className="m-5 flex flex-col items-center">
          <Image src={image} alt={text} className="m-2" />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Demo;
