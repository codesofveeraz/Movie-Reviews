import { getMovies } from "./js/movies.js";
import { renderMovies } from "./js/ui.js";

async function loadMovies() {
  const movies = await getMovies();
  renderMovies(movies);
}

window.addEventListener("DOMContentLoaded", loadMovies);
