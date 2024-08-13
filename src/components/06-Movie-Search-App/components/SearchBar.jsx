import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const SearchBar = () => {
  const { fetchMovies, loading, error } = useContext(MovieContext);
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchMovies(query);
  };

  return (
    <div className="my-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </div>
  );
};

export default SearchBar;
