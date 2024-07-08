import React from "react";
import WeatherCard from "./WeatherCard";

const Header = () => {
  return (
    <div className="bg-white h-auto w-auto flex justify-center">
      <h1 className="text-2xl font-serif">Weather App</h1>

      <WeatherCard />
    </div>
  );
};

export default Header;
