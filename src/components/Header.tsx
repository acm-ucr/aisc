import Image, { StaticImageData } from "next/image";

type HeaderProps = {
  text: string;
  image: StaticImageData;
  alt: string;
};

const Header = ({ text, image, alt }: HeaderProps) => {
  return (
    <>
      <span className="from-aisc-blue to-aisc-pink block h-1 w-full bg-gradient-to-r" />
      <div className="relative flex h-[10vh] flex-row items-center justify-center text-3xl md:h-[25vh] md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        <Image
          className="w-screen object-cover opacity-75"
          fill
          src={image}
          alt={alt}
        />
        <p className="z-10 font-bold text-white">{text}</p>
      </div>
      <span className="from-aisc-blue to-aisc-pink block h-1 w-full bg-gradient-to-r" />
    </>
  );
};

export default Header;
