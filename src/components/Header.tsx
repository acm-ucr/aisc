import Image, { StaticImageData } from "next/image";

type HeaderProps = {
  text: string;
  image: StaticImageData | string;
  alt: string;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <div className="from-aisc-blue to-aisc-pink h-1 w-screen bg-gradient-to-r"></div>
      <div className="relative flex h-[10vh] flex-row items-center justify-center text-3xl md:h-[25vh] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        <Image
          className="w-screen object-cover opacity-75"
          fill
          src={props.image}
          alt={props.alt}
        />
        <div className="flex flex-col items-center">
          <p className="z-10 font-bold text-white">{props.text}</p>
        </div>
      </div>
      <div className="to-aisc-blue from-aisc-pink h-1 w-screen bg-gradient-to-r"></div>
    </>
  );
};

export default Header;
