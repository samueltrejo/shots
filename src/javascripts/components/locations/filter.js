import data from './locations';

const filterLocations = (criteria) => {
  const locations = data.getLocations();
  const tempArray = [];
  if (criteria !== 'All') {
    locations.forEach((location) => {
      if (location.shootTime === criteria) {
        tempArray.push(location);
      }
    });
    data.domStringBuilder(tempArray);
  } else {
    data.domStringBuilder(locations);
  }
};

const filterCriteria = (event) => {
  const criteria = event.target.textContent;
  filterLocations(criteria);
};

const attachButtonEvents = () => {
  document.getElementById('filters').addEventListener('click', filterCriteria);
};

export default { attachButtonEvents };
