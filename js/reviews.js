import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const reviewsRef = collection(db, "reviews");

// Add a review
export async function addReview(review) {
  await addDoc(reviewsRef, {
    ...review,
    createdAt: serverTimestamp()
  });
}

// Get reviews by movieId
export async function getReviewsByMovie(movieId) {
  const q = query(reviewsRef, where("movieId", "==", movieId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
