import movieData from '../movies/movies';
import locationData from '../locations/locations';

import './movie-view.scss';

const movieViewBuilder = (event) => {
  console.error(movieData.getMovies());
  console.error(locationData.getLocations());
  console.error(event.target.id);
};

const movieEvents = () => {
  document.getElementById('movies').addEventListener('click', movieViewBuilder);
};

export default { movieEvents };
