import { getMovies } from "./movies.js";
import { getReviewsByMovie } from "./reviews.js";

const list = document.getElementById("movie-list");

async function renderMovies() {
  if (!list) return;

  const movies = await getMovies();
  list.innerHTML = "";

  if (movies.length === 0) {
    list.innerHTML = "<p style='text-align:center;'>No movies added yet</p>";
    return;
  }

  for (const movie of movies) {
    const poster =
      movie.poster && movie.poster.startsWith("http")
        ? movie.poster
        : "https://placehold.co/300x450?text=No+Image";

    // Fetch reviews for this movie
    const reviews = await getReviewsByMovie(movie.id);
    const avgRating =
      reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : "0";

    const card = document.createElement("div");
    card.className = "movie";
    card.style.cursor = "pointer";

    card.innerHTML = `
      <img src="${poster}" style="width:100%;pointer-events:none;">
      <h3>${movie.title}</h3>
      <p>${movie.description || ""}</p>
      <p style="margin-top:5px; font-size:0.9em;">
        ⭐ ${avgRating} / 5 (${reviews.length} review${reviews.length !== 1 ? "s" : ""})
      </p>
      <button class="view-reviews-btn">View Reviews</button>
    `;

    // Click anywhere on card redirects to review page
    card.addEventListener("click", () => {
      localStorage.setItem("selectedMovieId", movie.id);
      window.location.href = "/add-review.html";
    });

    list.appendChild(card);
  }
}

renderMovies();
