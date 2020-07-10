// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
  .then(unparsed => JSON.parse(unparsed))
  .then(parsed => parsed.iss_position)
  .catch(err => err.error ? JSON.parse(err.error) : err);
};


getIssPosition().then(result => result);

module.exports = { getIssPosition };