import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const moviesRef = collection(db, "movies");

export async function addMovie(movie) {
  await addDoc(moviesRef, movie);
}

export async function getMovies() {
  const snapshot = await getDocs(moviesRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
console.log("Firestore DB:", db);
