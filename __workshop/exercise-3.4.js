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
  let pos1;
  let pos2;

  getPositionFromAddress(address).then(res => {
    pos1 = res;
    getIssPosition().then(res => {
      pos2 = res;
      console.log(getDistance(pos1, pos2));
    });
  })
};

getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');