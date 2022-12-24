import Header from ".././components/Header";
import WeatherCard from ".././components/WeatherCard";

function Home() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-gradient-to-t from-blue-500 to-blue-400">

    <div className="rounded-lg shadow-lg bg-blue-300 w-2/3 h-96 flex flex-col ">
      <Header />
      <WeatherCard />
    </div>
    </div>
  );
}

export default Home;
