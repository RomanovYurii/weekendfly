import airports from './airports';

const filterAirports = (outbound, inbound) => { 
  const selected = airports.filter(airport => airport.key.toLowerCase().startsWith(outbound.toLowerCase()));
  const matching = selected[0].destinations.filter(destination => destination.toLowerCase().startsWith(inbound.toLowerCase()));
  const result = matching.map(item => { return { key: item }; });
  return result;
};

const fetchDest = (outbound, inbound) => {
  const promise = new Promise((resolve) => {
    const filteredAirports = filterAirports(outbound, inbound);
    setTimeout(() => resolve(filteredAirports), 500);
  });
  return promise;
};

export default fetchDest;
