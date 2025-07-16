import BoardCard from "@/components/board/Board";
import Placeholder from "@/public/placeholders/headshot.png";

const Board = () => {
  return (
    <div>
      <BoardCard
        headshot={Placeholder}
        name="Tanisha Jha"
        role="President"
        linkedin="www.google.com"
      />
      ;
    </div>
  );
};

export default Board;
