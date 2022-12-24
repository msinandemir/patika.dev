import { useWeather } from "../../context/WeatherContext";

function Index() {
  const { weather, days } = useWeather();
  

  return (
    <>
    <div className="grid grid-cols-7 mt-20">

      {weather &&
        weather.map((item, index) => (
          <div key={index} className={`flex justify-center items-center first:border-2 border-red-600 ml-4 `} >
            <div className=" mt-4 flex flex-col items-center ">
              <span className="font-bold text-gray-800">
                {days[new Date(item.datetime).getDay()]}
              </span>
              <span className="font-bold text-sm text-gray-500">
                {item.weather.description}
              </span>
              <img
                className="w-20 h-20"
                alt={`${item.weather.description}`}
                src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              />
              <div>
                <span className="font-bold">{item.max_temp}</span>
                <span className="font-bold text-gray-500 ml-4">
                  {item.min_temp}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
  );
}

export default Index;

//    {
//   weather ?
//   weather.map((item,index) => (

//     )) : <span>data yok...</span>

// }
