"use client";
import CountUp from "react-countup";

const Stats = [
  {
    Stat: "Officers",
    Quantity: 10,
    Suffix: "",
  },
  {
    Stat: "Members",
    Quantity: 100,
    Suffix: "+",
  },
  {
    Stat: "Workshops",
    Quantity: 5,
    Suffix: "",
  },
  {
    Stat: "Alumni",
    Quantity: 20,
    Suffix: "+",
  },
];

const StatisticsBar = () => {
  return (
    <div className="bg-aisc-gray flex w-full flex-col items-center justify-center">
      <div className="from-aisc-pink to-aisc-blue h-[4px] w-full bg-linear-to-r/shorter" />
      <div className="my-16 flex w-full flex-col items-center justify-evenly px-4 text-center text-white sm:flex-row sm:justify-evenly">
        {Stats.map(({ Stat, Quantity, Suffix }, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="mb-6 text-5xl font-bold sm:text-6xl md:text-7xl">
              <CountUp
                start={0}
                end={Quantity}
                duration={2}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                suffix={Suffix}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <span className="text-base sm:text-lg md:text-xl">{Stat}</span>
          </div>
        ))}
      </div>
      <div className="from-aisc-pink to-aisc-blue h-[4px] w-full bg-linear-to-r/shorter" />
    </div>
  );
};

export default StatisticsBar;
