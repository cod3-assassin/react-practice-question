import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
