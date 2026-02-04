export function renderMovies(movies) {
  const container = document.getElementById("movie-list");
  if (!container) return;

  container.innerHTML = "";

  movies.forEach(movie => {
    const poster = movie.poster && movie.poster.trim() !== ""
      ? movie.poster
      : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

    container.innerHTML += `
      <div class="movie-card">
        <img 
          src="${poster}" 
          alt="${movie.title}"
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'"
        >
        <h3>${movie.title}</h3>
        <p>${movie.description || "No description yet."}</p>
      </div>
    `;
  });
}
