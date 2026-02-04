export function renderTMDBResults(results) {
  const container = document.getElementById("tmdbResults");
  if (!container) return;

  container.innerHTML = "";

  results.forEach(movie => {
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

    container.innerHTML += `
      <div class="tmdb-card" data-title="${movie.title}" data-poster="${poster}" data-description="${movie.overview}">
        <img src="${poster}" alt="${movie.title}">
        <h4>${movie.title} (${movie.release_date?.slice(0,4) || "N/A"})</h4>
        <p>${movie.overview?.slice(0,100) || ""}...</p>
        <button class="add-movie-btn">Add Movie</button>
      </div>
    `;
  });

  // Add click listeners for "Add Movie" button
  document.querySelectorAll(".add-movie-btn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const card = e.target.closest(".tmdb-card");
      const movie = {
        title: card.dataset.title,
        poster: card.dataset.poster,
        description: card.dataset.description,
        createdAt: new Date()
      };
      await addMovie(movie);
      alert(`${movie.title} added!`);
    });
  });
}
