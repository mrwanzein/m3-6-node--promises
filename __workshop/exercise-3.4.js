// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getPositionFromAddress } = require('./exercise-3.2');
const { getIssPosition } = require('./exercise-3.1');

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.latitude, 2) + Math.pow(pos1.lng - pos2.longitude, 2)
  );
};

const getDistanceFromIss = (address) => {

  getPositionFromAddress(address).then(pos1 => {
    return getIssPosition().then(pos2 => {
      console.log(getDistance(pos1, pos2));
    });
  })
  .catch(err => console.log(err));

};

getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');
