import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Spinner from "../components/Spinner";
import NotFound from "./NotFound";
import { MovieContext } from "../contexts/MovieContext";

const Home = () => {
  const { movies, loading, error } = useContext(MovieContext);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (movies.length > 0) {
      setSearched(true);
    }
  }, [movies]);

  const noMoviesFoundMessage =
    "It seems we couldn't find any movies matching your search. Please try another search term.";
  const welcomeMessage =
    "Search for your favorite movies and explore details about them.";

  return (
    <div className="container mx-auto p-4">
      <Header />
      <SearchBar />
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : movies.length === 0 && searched ? (
        <NotFound message={noMoviesFoundMessage} />
      ) : movies.length === 0 ? (
        <div className="flex flex-col items-center h-screen text-center p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Movie Search
          </h1>
          <p className="text-lg text-gray-600 mb-6">{welcomeMessage}</p>
          <p className="text-gray-500">
            Enter a movie title in the search bar to get started.
          </p>
        </div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Home;
