const Stats = [
  {
    Stat: "Officers",
    Quantity: "10",
  },
  {
    Stat: "Members",
    Quantity: "100+",
  },
  {
    Stat: "Workshops",
    Quantity: "5",
  },
  {
    Stat: "Alumni",
    Quantity: "20+",
  },
];

const StatisticsBar = () => {
  return (
    <div className="bg-aisc-gray flex w-full flex-col items-center justify-center">
      <div className="from-aisc-pink to-aisc-blue h-[4px] w-full bg-linear-to-r/shorter" />
      <div className="my-15 flex w-full flex-row items-center justify-evenly px-4 text-center text-white">
        {Stats.map(({ Stat, Quantity }, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="mb-6 text-6xl font-bold">{Quantity}</span>
            <span className="text-lg">{Stat}</span>
          </div>
        ))}
      </div>
      <div className="from-aisc-pink to-aisc-blue h-[4px] w-full bg-linear-to-r/shorter" />
    </div>
  );
};

export default StatisticsBar;
