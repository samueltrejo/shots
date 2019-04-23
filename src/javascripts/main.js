import movies from './components/movies/movies';
import locations from './components/locations/locations';
import filter from './components/locations/filter';

import '../styles/main.scss';

const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
  filter.attachButtonEvents();
};

init();
