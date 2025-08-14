import Header from "@/components/Header";
import Placeholder from "@/public/placeholders/ambiguous.webp";
import BoardMap from "@/components/board/BoardMap";

const Board = () => {
  return (
    <>
      <Header text="Board" image={Placeholder} alt="board" />
      <BoardMap />
    </>
  );
};

export default Board;
