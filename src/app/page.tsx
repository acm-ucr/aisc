import Landing from "@/components/home/Landing";
import StatisticsBar from "@/components/home/StatisticsBar";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Landing />
      <StatisticsBar />
    </div>
  );
};

export default Home;
