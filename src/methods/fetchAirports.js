import airports from './airports';

const filterAirports = value => airports.filter(
  airport => airport.key.toLowerCase().startsWith(value.toLowerCase()),
);

const fetchAirports = (value) => {
  const promise = new Promise((resolve) => {
    const filteredAirports = value === ''
      ? []
      : filterAirports(value);
    setTimeout(() => resolve(filteredAirports), 500);
  });
  return promise;
};

export default fetchAirports;
