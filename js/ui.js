console.log("UI JS LOADED");

import { loadMovies } from "./movies.js";
import { loadReviews } from "./reviews.js";

document.addEventListener("DOMContentLoaded", () => {
  loadMovies();
  loadReviews();
});
