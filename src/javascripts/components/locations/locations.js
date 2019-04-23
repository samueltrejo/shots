import locationsData from '../../helpers/data/locations-data';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div id="${location.id}" class="card text-center w-15 m-3">`;
    domString += `<div class="card-header">${location.name}</div>`;
    domString += '<div class="card-body">';
    domString += `<img src="${location.imageUrl}" class="card-img-top" alt="ball of twine">`;
    domString += `<p class="card-text">${location.address}</p>`;
    domString += '</div>';
    domString += '</div>';
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
