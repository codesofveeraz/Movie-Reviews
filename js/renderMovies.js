import { getMovies } from "./movies.js";

const list = document.getElementById("movie-list");

async function renderMovies() {
  if (!list) return;

  const movies = await getMovies();
  list.innerHTML = "";

  movies.forEach(movie => {
    const poster =
      movie.poster && movie.poster.startsWith("http")
        ? movie.poster
        : "https://placehold.co/300x450?text=No+Image";

    const card = document.createElement("div");
    card.className = "movie";

    card.innerHTML = `
      <img src="${poster}">
      <h3>${movie.title}</h3>
      <p>${movie.description || ""}</p>
    `;

    list.appendChild(card);
  });
}

renderMovies();
