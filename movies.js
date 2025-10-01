const moviesWrapper = document.querySelector('.movies');
const searchInput = document.getElementById('.sort__title');
const filterSelect = document.getElementById('sortMovies');

let currentMovies = [];

function searchChange(event) {
    renderMovies(event.target.value);
}


async function renderMovies(searchTerm) {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fa23a09b&s=${searchTerm}`);
    const data = await response.json();
    currentMovies = data.Search;
    displayMovies(currentMovies);
}

function displayMovies(movieList) {
    moviesWrapper.innerHTML = movieList.slice(0, 6).map((movie) => {
        return `
        <div class="movie">
            <img class="movie__img" src="${movie.Poster}">
            <h3 class="movie__title">${movie.Title}</h3>
            <p class="movie__year">${movie.Year}</p>
            <button class="movie__button">Add to Watchlist</button>
        </div>
    `;
    }).join('');
}


function sortChange(event) {
    const sortOption = event.target.value;

    let sortedMovies = [...currentMovies];

    if (sortOption === "newest") {
        sortedMovies.sort((a, b) => b.Year - a.Year);
    } else if (sortOption === "oldest") {
        sortedMovies.sort((a, b) => a.Year - b.Year);
    }

    displayMovies(sortedMovies);
}
