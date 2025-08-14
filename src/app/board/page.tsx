import Header from "@/components/Header";
import Placeholder from "@/public/placeholders/ambiguous.webp";
import Demo from "@/components/demo/demo";

const Board = () => {
  return (
    <>
      <Header text="Board" image={Placeholder} alt="board" />
      <Demo />
    </>
  );
};

export default Board;
