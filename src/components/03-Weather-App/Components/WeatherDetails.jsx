import React from "react";

const WeatherDetails = ({ details }) => {
  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-md rounded-xl p-6 my-6 mx-auto max-w-sm text-center text-white">
      <h2 className="text-2xl font-bold">Weather Details</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-2">
          <p className="font-semibold">Humidity</p>
          <p>{details.humidity}%</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-2">
          <p className="font-semibold">Wind Speed</p>
          <p>{details.windSpeed} km/h</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-2">
          <p className="font-semibold">Pressure</p>
          <p>{details.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
