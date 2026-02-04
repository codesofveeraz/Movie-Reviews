import { addMovie, getMovies } from "./movies.js";
import { renderMovies } from "./ui.js";

const form = document.getElementById("movie-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const movie = {
      title: document.getElementById("title").value,
      poster: document.getElementById("poster").value,
      description: document.getElementById("description").value,
      createdAt: new Date()
    };

    await addMovie(movie);
    alert("Movie added!");
    form.reset();
  });
}
async function loadMovies() {
  const movies = await getMovies();
  renderMovies(movies);
}

loadMovies();
