import { addMovie } from "./movies.js";

export function renderTMDBResults(results) {
  const container = document.getElementById("tmdbResults");
  if (!container) return;

  container.innerHTML = "";

  results.forEach(movie => {
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://placehold.co/300x450?text=No+Image";

    container.innerHTML += `
      <div class="tmdb-card"
        data-title="${movie.title}"
        data-poster="${poster}"
        data-description="${movie.overview}">
        <img src="${poster}">
        <h4>${movie.title}</h4>
        <button class="add-movie-btn">Add Movie</button>
      </div>
    `;
  });

  document.querySelectorAll(".add-movie-btn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const card = e.target.closest(".tmdb-card");

     const movie = {
  title: card.dataset.title,
  poster: card.dataset.poster.startsWith("http")
    ? card.dataset.poster
    : "https://placehold.co/300x450?text=No+Image",
  description: card.dataset.description,
  createdAt: new Date()
};


      await addMovie(movie);
      alert("Movie added!");
    });
  });
}
