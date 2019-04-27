import moviesData from '../../helpers/data/movies-data';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const getMovies = () => movies;

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div id="${movie.id}" class="card text-center w-25 m-3">`;
    domString += `<div class="card-header">${movie.name}</div>`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${movie.genre}</h5>`;
    domString += `<p class="card-text">${movie.description}</p>`;
    domString += `<a href="#" class="btn btn-primary">${movie.locations.length} Locations</a>`;
    domString += '</div>';
    domString += `<div class="card-footer text-muted">${movie.releaseDate}</div>`;
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((response) => {
      const movieResults = response.data.movies;
      movies = movieResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies, getMovies };
