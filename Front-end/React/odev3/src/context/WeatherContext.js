import { createContext, useContext, useState, useEffect } from "react";
import { useCity } from "./CityContext";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const { city } = useCity();
  const API_URL = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
  const API_CITY = city;
  const API_KEY = "&key=93d01e6642fd45c49cac833408a1eb83";
  //9a82f160da494fd2be2b411c71db2b38
  const API_LANG = "&lang=tr";
  const API_DAYS = "&days=7";
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  useEffect(() => {
    axios(`${API_URL}${API_CITY}${API_KEY}${API_LANG}${API_DAYS}`)
      .then((res) => {
        setWeather(res.data.data);
      })
      .catch((err) => {
        alert("Veri çekilerken hata oluştu hata =>" + err);
      });
  }, [API_CITY, city]);

  const values = {
    weather,
    setWeather,
    days,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const weather = useContext(WeatherContext);
  return weather;
};
