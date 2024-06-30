// src/components/01-SimpleCounter.js
import React, { useState } from "react";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-white h-80 border-white rounded-md">
      <h1 className="text-2xl font-bold">Simple Counter</h1>
      <div className="text-xl">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default SimpleCounter;
