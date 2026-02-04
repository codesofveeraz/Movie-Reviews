console.log("MAIN JS LOADED");

import { loadMovies } from "./movies.js";
import { loadReviews } from "./reviews.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM READY");
  loadMovies();
  loadReviews();
});
