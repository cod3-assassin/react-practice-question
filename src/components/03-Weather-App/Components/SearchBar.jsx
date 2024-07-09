import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          className="w-full border-2 border-gray-300 bg-white h-12 px-5 pr-10 rounded-lg text-sm focus:outline-none"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="absolute right-0 top-0 mt-2 mr-4"
          onClick={handleSearch}
        >
          <BiSearch className="text-gray-600 h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
