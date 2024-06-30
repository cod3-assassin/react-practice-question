import React, { useState } from "react";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const setCountValue = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      setCount(value);
    }
  };

  const resetCount = () => {
    setCount(0);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-white h-80 border-white rounded-md p-4">
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
        <button
          onClick={resetCount}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
      <div className="flex space-x-4 items-center">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="border-2 border-gray-300 rounded px-2 py-1"
          placeholder="Set Count"
        />
        <button
          onClick={setCountValue}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Set
        </button>
      </div>
    </div>
  );
};

export default SimpleCounter;
