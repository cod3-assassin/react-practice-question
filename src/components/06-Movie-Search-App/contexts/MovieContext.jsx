import React, { createContext, useState } from "react";
import { fetchMovies } from "../api/movieApi";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const moviesData = await fetchMovies(query);
      setMovies(moviesData);
    } catch (error) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{ movies, fetchMovies: handleFetchMovies, loading, error }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
