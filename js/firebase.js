import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyArIK2AOYxX57kw1Zzv3c__IXc0ciPZyVg",
  authDomain: "movie-reviews-c4aa1.firebaseapp.com",
  projectId: "movie-reviews-c4aa1",
  storageBucket: "movie-reviews-c4aa1.firebasestorage.app",
  messagingSenderId: "682467244643",
  appId: "1:682467244643:web:7dea3695bc6f2105ae9656"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
