export function renderMovies(movies) {
  const container = document.getElementById("movie-list");
  if (!container) return;

  container.innerHTML = "";

  movies.forEach(movie => {
    const poster = movie.poster?.trim()
      ? movie.poster
      : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

    container.innerHTML += `
      <div class="movie-card" data-id="${movie.id}">
        <img src="${poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.description || "No description yet."}</p>
      </div>
    `;
  });

  document.querySelectorAll(".movie-card").forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = `add-review.html?movieId=${card.dataset.id}`;
    });
  });
}
export function renderReviews(reviews) {
  const container = document.getElementById("reviewsList");
  if (!container) return;

  container.innerHTML = "";

  reviews.forEach(review => {
    container.innerHTML += `
      <div class="review-card">
        <strong>${review.reviewer}</strong>
        ⭐ ${review.rating}/5
        <p>${review.text}</p>
      </div>
    `;
  });
}
