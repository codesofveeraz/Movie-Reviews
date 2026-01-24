const movies = [
    {
        id: "loot",
        title: "Loot",
        genre: "Crime / Drama",
        language: "Nepali",
        description: "A cult classic Nepali crime movie."
    },
    {
        id: "talakjung",
        title: "Talakjung vs Tulke",
        genre: "Drama",
        language: "Nepali",
        description: "A powerful political drama."
    },
    {
        id: "inception",
        title: "Inception",
        genre: "Sci-Fi / Thriller",
        language: "English",
        description: "A mind-bending thriller by Christopher Nolan."
    }
];

const movieList = document.getElementById("movie-list");

movies.forEach(movie => {
    const movieDiv = document.createElement("div");
    movieDiv.className = "movie";
    movieDiv.dataset.id = movie.id;

    movieDiv.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Language:</strong> ${movie.language}</p>
        <p>${movie.description}</p>

        <h3>Add Your Review</h3>
        <input type="text" placeholder="Your name" class="name">
        <select class="rating">
            <option value="">Rating</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
        </select>
        <br><br>
        <textarea placeholder="Write your review" class="review"></textarea>
        <br><br>
        <button onclick="addReview(this)">Submit Review</button>

        <h3>Reviews</h3>
        <div class="reviews"></div>
    `;

    movieList.appendChild(movieDiv);
    loadReviews(movie.id, movieDiv);
});

function addReview(button) {
    const movieDiv = button.parentElement;
    const movieId = movieDiv.dataset.id;

    const name = movieDiv.querySelector(".name").value;
    const rating = movieDiv.querySelector(".rating").value;
    const reviewText = movieDiv.querySelector(".review").value;

    if (!name || !rating || !reviewText) {
        alert("Please fill all fields");
        return;
    }

    const review = { name, rating, reviewText };

    const storedReviews = JSON.parse(localStorage.getItem(movieId)) || [];
    storedReviews.push(review);
    localStorage.setItem(movieId, JSON.stringify(storedReviews));

    displayReview(review, movieDiv);

    movieDiv.querySelector(".name").value = "";
    movieDiv.querySelector(".rating").value = "";
    movieDiv.querySelector(".review").value = "";
}

function loadReviews(movieId, movieDiv) {
    const storedReviews = JSON.parse(localStorage.getItem(movieId)) || [];
    storedReviews.forEach(review => {
        displayReview(review, movieDiv);
    });
}

function displayReview(review, movieDiv) {
    const reviewsDiv = movieDiv.querySelector(".reviews");

    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review-item";
    reviewDiv.innerHTML = `
        <strong>${review.name}</strong> – ⭐${review.rating}
        <p>${review.reviewText}</p>
        <hr>
    `;

    reviewsDiv.appendChild(reviewDiv);
}
function searchMovies() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const movieDivs = document.querySelectorAll(".movie");

    movieDivs.forEach(movieDiv => {
        const title = movieDiv.querySelector("h2").innerText.toLowerCase();
        movieDiv.style.display = title.includes(query) ? "block" : "none";
    });
}
function filterMovies() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const language = document.getElementById("languageFilter").value;
    const genre = document.getElementById("genreFilter").value;

    const movieDivs = document.querySelectorAll(".movie");

    movieDivs.forEach(movieDiv => {
        const title = movieDiv.querySelector("h2").innerText.toLowerCase();
        const movieLanguage = movieDiv.innerHTML;
        const movieGenre = movieDiv.innerHTML;

        let matchesSearch = title.includes(searchQuery);
        let matchesLanguage = language === "" || movieLanguage.includes(language);
        let matchesGenre = genre === "" || movieGenre.includes(genre);

        movieDiv.style.display =
            matchesSearch && matchesLanguage && matchesGenre
                ? "block"
                : "none";
    });
}
