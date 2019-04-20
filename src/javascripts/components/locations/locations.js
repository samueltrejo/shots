import locationsData from '../../helpers/data/locations-data';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((movie) => {
    domString += `<h3>${movie.name}</h3>`;
  });
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((response) => {
      const movieResults = response.data.locations;
      locations = movieResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
