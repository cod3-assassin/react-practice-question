// src/components/BackButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-white bg-blue-500 px-3 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        <FaArrowLeft className="mr-2" /> Back to Home
      </button>
    </div>
  );
};

export default BackButton;
