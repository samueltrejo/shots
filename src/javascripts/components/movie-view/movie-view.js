import movieData from '../movies/movies';
import locationData from '../locations/locations';
import print from '../../helpers/util';

import './movie-view.scss';

const toMovies = () => {
  document.getElementById('main-view').style.display = '';
  document.getElementById('movie-view').style.display = 'none';
};

const domStringBuilder = (item, array) => {
  console.error(item);
  let domString = '';
  domString += `<div id="${item.id}" class="movie card text-center w-25 m-3">`;
  domString += `<div class="card-header">${item.name}</div>`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${item.genre}</h5>`;
  domString += `<p class="card-text">${item.description}</p>`;
  domString += `<a href="#" class="btn btn-primary">${item.locations.length} Locations</a>`;
  domString += '</div>';
  domString += `<div class="card-footer text-muted">${item.releaseDate}</div>`;
  domString += '</div>';
  print.printToDom('single-movie', domString);

  let newDomString = '';
  array.forEach((arrayItem) => {
    newDomString += `<div id="${arrayItem.id}" class="card text-center w-15 m-3">`;
    newDomString += `<div class="card-header ${locationData.shootTimeClass(arrayItem.shootTime)}">${arrayItem.name}</div>`;
    newDomString += '<div class="card-body">';
    newDomString += `<img src="${arrayItem.imageUrl}" class="card-img-top" alt="ball of twine">`;
    newDomString += `<p class="card-text">${arrayItem.address}</p>`;
    newDomString += '</div>';
    newDomString += '</div>';
  });
  print.printToDom('movie-locations', newDomString);
  document.getElementById('main-view').style.display = 'none';
  document.getElementById('movie-view').style.display = '';
  document.getElementById('to-movies').addEventListener('click', toMovies);
};

const movieViewBuilder = (event) => {
  const movieId = event.target.closest('.movie').id;
  const movies = movieData.getMovies();
  const locations = locationData.getLocations();

  const specificMovie = movies.filter(movie => movie.id === movieId);
  const movieLocationIds = specificMovie[0].locations;

  const movieLocations = [];

  movieLocationIds.forEach((locationId) => {
    locations.forEach((location) => {
      if (location.id === locationId) {
        movieLocations.push(location);
      }
    });
  });

  domStringBuilder(specificMovie[0], movieLocations);
};

const movieEvents = () => {
  document.getElementById('movies').addEventListener('click', movieViewBuilder);
};

export default { movieEvents };
