import React from "react";
import Home from "./pages/Home";
import MovieProvider from "./contexts/MovieContext";

const MoviesApp = () => {
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  );
};

export default MoviesApp;
