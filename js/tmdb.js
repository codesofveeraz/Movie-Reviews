const TMDB_API_KEY = "137884da4668a102e291c051cb834cb7";
const TMDB_BASE = "https://api.themoviedb.org/3";

export async function searchMovie(query) {
  const url = `${TMDB_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results; // array of movies
}
