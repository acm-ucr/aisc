const Board = () => {
  return (
  <div>
    <p>Board</p>
    <div className="flex flex-col md:flex-row gap-4 m-6">
      <div className="bg-red-300 flex-1 p-4 text-center rounded-lg">
        Box 1
      </div>
      <div className="bg-green-300 flex-1 p-4 text-center rounded-lg">
        Box 2
      </div>
      <div className="bg-yellow-300 flex-1 p-4 text-center rounded-lg">
        Box 3
      </div>
    </div>
  </div>);
};

export default Board;
