import React, { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import WeatherDetails from "./Components/WeatherDetails";
import ErrorMessage from "./Components/ErrorMessage";
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "f6d16326d6cb9c5963cc5c0a5b22c80c";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (response.status === 404) {
        setError("Invalid City Name");
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError("");
      }
    } catch (error) {
      setError("Failed to fetch weather data");
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center p-4">
      <div className="mt-4 mb-8">
        <Header />
      </div>
      <SearchBar onSearch={fetchWeather} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
