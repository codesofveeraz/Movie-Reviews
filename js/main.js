import { addReview, getReviewsByMovie } from "./reviews.js";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("movieId");

if (movieId) {
  loadReviews(movieId);
}

async function loadReviews(movieId) {
  const reviews = await getReviewsByMovie(movieId);
  renderReviews(reviews);
}
