import Board from "@/components/board/Board";
import { board } from "@/data/Board";

const BoardMap = () => {
  return (
    <div className="p-20">
      <div className="flex justify-center gap-20">
        {board.slice(0, 2).map(({ image, name, position, linkedin }, index) => (
          <Board
            key={index}
            headshot={image}
            name={name}
            role={position}
            linkedin={linkedin}
          />
        ))}
      </div>
      <div className="flex justify-center gap-30">
        {board.slice(2, 5).map(({ image, name, position, linkedin }, index) => (
          <Board
            key={index}
            headshot={image}
            name={name}
            role={position}
            linkedin={linkedin}
          />
        ))}
      </div>
      <div className="flex justify-center gap-30">
        {board.slice(5, 8).map(({ image, name, position, linkedin }, index) => (
          <Board
            key={index}
            headshot={image}
            name={name}
            role={position}
            linkedin={linkedin}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {board.slice(8, 9).map(({ image, name, position, linkedin }, index) => (
          <Board
            key={index}
            headshot={image}
            name={name}
            role={position}
            linkedin={linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardMap;
