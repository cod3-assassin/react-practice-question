import React from "react";
import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDayHaze,
} from "react-icons/wi";

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, wind, visibility } = weatherData;

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-xl mb-4">{weather[0].description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <p className="text-5xl font-bold">{Math.round(main.temp)}°C</p>
          <p className="text-sm">Feels like {Math.round(main.feels_like)}°C</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-20 h-20"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center p-4 rounded-lg bg-blue-100">
          <WiHumidity size={40} className="text-blue-500" />
          <p className="text-xl font-semibold">{main.humidity}%</p>
          <p className="text-sm">Humidity</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-blue-100">
          <WiStrongWind size={40} className="text-blue-500" />
          <p className="text-xl font-semibold">{wind.speed} m/s</p>
          <p className="text-sm">Wind Speed</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-blue-100">
          <WiBarometer size={40} className="text-blue-500" />
          <p className="text-xl font-semibold">{main.pressure} hPa</p>
          <p className="text-sm">Pressure</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-blue-100">
          <WiDayHaze size={40} className="text-blue-500" />
          <p className="text-xl font-semibold">
            {(visibility / 1000).toFixed(1)} km
          </p>
          <p className="text-sm">Visibility</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
