import data from './locations';

const searchFilter = (event) => {
  const locations = data.getLocations();
  const searchText = event.target.value;
  const searchLocations = locations.filter((x) => {
    const hasName = x.name.includes(searchText);
    const hasAddress = x.address.includes(searchText);
    return hasName || hasAddress;
  });
  data.domStringBuilder(searchLocations);
};

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
  document.getElementById('search').addEventListener('keyup', searchFilter);
};

export default { attachButtonEvents };
