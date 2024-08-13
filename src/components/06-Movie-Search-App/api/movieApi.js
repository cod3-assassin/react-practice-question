export const fetchMovies = async (query) => {
  const API_KEY = "eb3cdedcc7msh55491074790d611p10f7d4jsn03c317574ba3";
  const BASE_URL = "https://moviesdatabase.p.rapidapi.com/titles/search/title";

  try {
    const response = await fetch(`${BASE_URL}/${query}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};
