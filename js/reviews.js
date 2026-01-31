import { db } from "./firebase.js";
import { collection, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export function loadReviews() {
  console.log("Loading reviews...");
  const reviewsList = document.getElementById("reviewsList");

  const q = query(
    collection(db, "reviews"),
    orderBy("createdAt", "desc")
  );

  onSnapshot(q, snapshot => {
    reviewsList.innerHTML = "";

    snapshot.forEach(doc => {
      const r = doc.data();
      reviewsList.innerHTML += `
        <div>
          <strong>${r.name}</strong> ⭐ ${r.rating}/5
          <p>${r.text}</p>
        </div>
      `;
    });
  });
}
