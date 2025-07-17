const Board = () => {
  return (
    <div>
      <p>Board</p>
      <div className="m-6 flex flex-col gap-4 md:flex-row">
        <div className="flex-1 rounded-lg bg-red-300 p-4 text-center">
          Box 1
        </div>
        <div className="flex-1 rounded-lg bg-green-300 p-4 text-center">
          Box 2
        </div>
        <div className="flex-1 rounded-lg bg-yellow-300 p-4 text-center">
          Box 3
        </div>
      </div>
    </div>
  );
};

export default Board;
