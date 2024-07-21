import React from "react";

const Input = ({ value }) => {
  return (
    <input
      type="text"
      value={value}
      className="w-full text-right p-4 text-3xl bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      readOnly
    />
  );
};

export default Input;
