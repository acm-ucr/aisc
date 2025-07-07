import Landing from "@/components/home/Landing";
import Description from "@/components/home/Description";
import StatisticsBar from "@/components/home/StatisticsBar";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Landing />
      <Description />
      <StatisticsBar />
    </div>
  );
};

export default Home;
