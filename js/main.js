import { searchMovie } from "./tmdb.js";
import { addMovie } from "./movies.js";
import { renderTMDBResults } from "./ui.js";

const searchInput = document.getElementById("tmdbSearch");

if (searchInput) {
  searchInput.addEventListener("input", async (e) => {
    const query = e.target.value.trim();
    if (!query) return;

    const results = await searchMovie(query);
    renderTMDBResults(results);
  });
}
