
import axios from 'axios';
import type { Movie } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(API_URL, {
    params: { query },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  return response.data.results;
};
