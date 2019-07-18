import { getGenres } from "./genreService";
import http from "./httpService";
import { apiUrl } from "./config.json";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}

export function deleteMovie(movieId) {
  http.delete(apiEndpoint + "/" + movieId);
}

export function saveNewMovie(movie) {
  return http.post(apiEndpoint, movie);
}

export function updateMovie(movie) {
  http.put(apiEndpoint + "/" + movie._id, movie);
}
