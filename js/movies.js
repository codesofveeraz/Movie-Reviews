import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function loadMovies() {
  console.log("Loading movies...");
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";

  const snapshot = await getDocs(collection(db, "movies"));

  snapshot.forEach(doc => {
    const movie = doc.data();

    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${movie.poster}" />
      <h3>${movie.title} (${movie.year})</h3>
      <p>${movie.language}</p>
    `;

    movieList.appendChild(card);
  });
}
