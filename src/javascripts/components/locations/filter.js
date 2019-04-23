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
  if (criteria !== 'All') {
    const filteredArray = locations.filter(x => x.shootTime === criteria);
    data.domStringBuilder(filteredArray);
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
