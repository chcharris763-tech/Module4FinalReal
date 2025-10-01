const moviesWrapper = document.querySelector('.movies');

function searchChange(event) {
    renderMovies(event.target.value);
}


async function renderMovies(searchTerm) {
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fa23a09b&s=${searchTerm}');
    const data = await response.json();
    const moviesArr = data.Search;
    console.log(moviesArr);
    moviesWrapper.innerHTML = moviesArr.slice(0, 6).map((movie) => {
        return `
        <div class="movie">
            <img class="movie__img" src="${movie.Poster}">
            <h3 class="movie__title">${movie.Title}</h3>
            <p class="movie__year">${movie.Year}</p>
            <button class="movie__button">Add to Watchlist</button>
        </div>
    `
    }).join('');
}
