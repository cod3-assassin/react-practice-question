import React from "react";
import { FaHome, FaArchive, FaTrash } from "react-icons/fa";

const Header = ({ onTabChange }) => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">QuickNotes</h1>
      <nav className="flex space-x-4">
        <button
          className="flex flex-col items-center px-1 py-2 rounded transition hover:bg-blue-800"
          onClick={() => onTabChange("home")}
        >
          <FaHome className="text-xl md:text-2xl mb-1" />
          <span className="text-xs sm:hidden">Home</span>
          <span className="hidden sm:inline">Home</span>
        </button>
        <button
          className="flex flex-col items-center px-4 py-2 rounded transition hover:bg-blue-800"
          onClick={() => onTabChange("archive")}
        >
          <FaArchive className="text-xl md:text-2xl mb-1" />
          <span className="text-xs sm:hidden">Archive</span>
          <span className="hidden sm:inline">Archive</span>
        </button>
        <button
          className="flex flex-col items-center px-4 py-2 rounded transition hover:bg-blue-800"
          onClick={() => onTabChange("trash")}
        >
          <FaTrash className="text-xl md:text-2xl mb-1" />
          <span className="text-xs sm:hidden">Trash</span>
          <span className="hidden sm:inline">Trash</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
