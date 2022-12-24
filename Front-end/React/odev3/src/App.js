import "./App.css";
import { CityContextProvider } from "./context/CityContext";
import { WeatherContextProvider } from "./context/WeatherContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CityContextProvider>
        <WeatherContextProvider>
          <Home />
        </WeatherContextProvider>
      </CityContextProvider>
    </>
  );
}

export default App;
