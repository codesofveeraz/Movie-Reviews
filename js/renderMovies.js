import { getMovies } from "./movies.js";

const list = document.getElementById("movie-list");

async function renderMovies() {
  if (!list) return;

  const movies = await getMovies();
  list.innerHTML = "";

  movies.forEach(movie => {
    let poster = "https://placehold.co/300x450?text=No+Image";

if (movie.poster && movie.poster.startsWith("http")) {
  poster = movie.poster;
}


    const card = document.createElement("div");
card.className = "movie";
card.style.cursor = "pointer";

card.addEventListener("click", () => {
  localStorage.setItem("selectedMovieId", movie.id);
  window.location.href = "/add-review.html";
});


    card.innerHTML = `
      <img src="${poster}">
      <h3>${movie.title}</h3>
      <p>${movie.description || ""}</p>
    `;

    list.appendChild(card);
  });
}

renderMovies();
