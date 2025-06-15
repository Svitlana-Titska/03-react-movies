import axios from "axios";
import type { MoviesResponse } from "../types/movie"; // ← тільки те, що реально потрібно

const API_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (
  query: string,
  page = 1
): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>(API_URL, {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  return response.data;
};
