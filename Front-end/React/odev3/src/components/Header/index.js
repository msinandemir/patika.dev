import { useCity } from "../../context/CityContext";
import cities from "../../data/cities.json";

function Index() {
  const {setCity } = useCity();

  const onChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="bg-blue-800 h-10 flex items-center rounded-t-lg ">
      <span className="text-white ml-20 text-sm font-bold mr-2">
        Şehir seç:
      </span>
      <select onChange={onChange}>
        {cities.map((data) => (
          <option key={data.id}> {data.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Index;
