import React from "react";

const WeatherCard = () => {
  const city = "Shirdi";
  return (
    <div>
      <div className="bg-red-300 h-80 w-80">
        <p>{city}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
