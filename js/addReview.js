import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const submitBtn = document.getElementById("submitReview");

// TEMP: hardcoded movieId (we'll improve this in Step 2)
const movieId = localStorage.getItem("selectedMovieId");

if (submitBtn) {
  submitBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const rating = Number(document.getElementById("rating").value);
    const text = document.getElementById("text").value;

    if (!name || !rating || !text || !movieId) {
      alert("Missing fields or movie not selected");
      return;
    }

    await addDoc(collection(db, "reviews"), {
      movieId,
      name,
      rating,
      text,
      createdAt: serverTimestamp()
    });

    alert("Review submitted!");
  });
}
