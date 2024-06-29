// src/components/SimpleCounter/index.js
import React, { useState } from "react";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Simple Counter</h1>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <span className="text-2xl">{count}</span>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded shadow"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default SimpleCounter;
