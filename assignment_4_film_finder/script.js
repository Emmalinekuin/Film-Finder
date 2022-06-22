const addMoviesToDom = function (movies) {
  const posterContainer = document.getElementById("poster-container");

  const movieList = movies.map((movie) => {
    let movieListItem = document.createElement("li");

    let movieListPoster = document.createElement("img");
    movieListPoster.src = movie.poster;

    let link = document.createElement("a");
    link.href = "https://www.imdb.com/title/" + movie.imdbID;
    link.target = "_blank";

    movieListItem.appendChild(link);
    link.appendChild(movieListPoster);

    return movieListItem;
  });

  movieList.forEach((movieListItem) => {
    posterContainer.appendChild(movieListItem);
  });
};

const removeMoviesFromDom = function () {
  const listedMovies = document.getElementById("poster-container");

  while (listedMovies.hasChildNodes()) {
    listedMovies.removeChild(listedMovies.firstChild);
    // console.log("alle films(li) zijn uit de lijst(ul)verwijderd");
  }
};

const addEventListeners = function () {
  const radioButtons = document.getElementsByName("film-filter");

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", handleOnChangeEvent);
  });
};

const filterMoviesTitle = function (wordInMovie) {
  removeMoviesFromDom();

  const filterMovies = movies.filter((movie) => {
    return movie.title.includes(wordInMovie);
  });

  addMoviesToDom(filterMovies);

  console.log("filtered " + wordInMovie + " movies:", filterMovies);
};

const filterLatestMovies = function () {
  removeMoviesFromDom();

  const filterMoviesYear = movies.filter((movie) => {
    return movie.year >= 2014;
  });

  addMoviesToDom(filterMoviesYear);

  console.log("filtered newest movies: ", filterMoviesYear);
};

const handleOnChangeEvent = function (event) {
  switch (event.target.id) {
    case "new-movies-radio":
      filterLatestMovies();
      break;
    case "avenger-radio":
      filterMoviesTitle("Avenger");
      break;
    case "x-men-radio":
      filterMoviesTitle("X-Men");
      break;
    case "princess-radio":
      filterMoviesTitle("Princess");
      break;
    case "batman-radio":
      filterMoviesTitle("Batman");
      break;
    default:
      console.log("hey you didn't filter a movie yet..");
      break;
  }
};

addMoviesToDom(movies);

addEventListeners();
