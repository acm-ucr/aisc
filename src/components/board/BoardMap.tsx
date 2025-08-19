import Board from "@/components/board/Board";
import { board } from "@/data/Board";

const BoardMap = () => {
  return (
    <div className="p-20">
      <div className="hidden lg:flex">
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
      <div className="hidden grid-cols-3 lg:grid">
        {board.slice(2, 8).map(({ image, name, position, linkedin }, index) => (
          <Board
            key={index}
            headshot={image}
            name={name}
            role={position}
            linkedin={linkedin}
          />
        ))}
      </div>
      <div className="hidden lg:flex">
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

      <div className="lg:hidden">
        {board.map(({ image, name, position, linkedin }, index) => (
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
