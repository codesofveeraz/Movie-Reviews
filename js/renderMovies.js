import { getMovies } from "./movies.js";

const list = document.getElementById("movie-list");

async function renderMovies() {
  if (!list) return;

  const movies = await getMovies();
  list.innerHTML = "";

  movies.forEach(movie => {
    list.innerHTML += `
      <div class="movie">
        <img src="${movie.poster}" width="150">
        <h3>${movie.title}</h3>
        <p>${movie.description?.slice(0,150) || ""}</p>
        <a href="add-review.html">Add Review</a>
      </div>
    `;
  });
}

renderMovies();
