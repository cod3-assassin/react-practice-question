import React from "react";

const NotFound = ({ message }) => (
  <div className="flex flex-col items-center  h-screen text-center p-4">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">No Movies Found</h1>
    <p className="text-lg text-gray-600 mb-6">{message}</p>
    <button
      onClick={() => window.location.reload()}
      className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      Start a New Search
    </button>
  </div>
);

export default NotFound;
