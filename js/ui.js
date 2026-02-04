export function renderMovies(movies) {
  const container = document.getElementById("movie-list");
  container.innerHTML = "";

  movies.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card">
        <img src="${movie.poster}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
      </div>
    `;
  });
}
