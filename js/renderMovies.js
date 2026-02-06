import { getMovies } from "./movies.js";

const list = document.getElementById("movie-list");

async function renderMovies() {
  if (!list) return;

  const movies = await getMovies();
  list.innerHTML = "";

  if (movies.length === 0) {
    list.innerHTML = "<p style='text-align:center;'>No movies added yet</p>";
    return;
  }

  movies.forEach(movie => {
    const poster =
      movie.poster && movie.poster.startsWith("http")
        ? movie.poster
        : "https://placehold.co/300x450?text=No+Image";

    const card = document.createElement("div");
    card.className = "movie";
    card.style.cursor = "pointer";

    card.innerHTML = `
      <img src="${poster}" style="width:100%;pointer-events:none;">
      <h3>${movie.title}</h3>
      <p>${movie.description || ""}</p>
      <small style="color:#666;">Click to add review</small>
    `;

    // ✅ CLICK HANDLER (THIS IS THE FIX)
    card.addEventListener("click", () => {
      localStorage.setItem("selectedMovieId", movie.id);
      window.location.href = "/add-review.html";
    });

    list.appendChild(card);
  });
}

renderMovies();
