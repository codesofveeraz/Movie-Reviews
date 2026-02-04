import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// reference to movies collection
const moviesRef = collection(db, "movies");

// add a movie
export async function addMovie(movie) {
  await addDoc(moviesRef, movie);
}

// get all movies
export async function getMovies() {
  const snapshot = await getDocs(moviesRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
