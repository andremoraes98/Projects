const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    } else if (entrant.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  let price = 0;
  if (!entrants || !entrants.length) {
    return price;
  }
  price += countEntrants(entrants).child * data.prices.child;
  price += countEntrants(entrants).adult * data.prices.adult;
  price += countEntrants(entrants).senior * data.prices.senior;
  return price;
}

module.exports = { calculateEntry, countEntrants };
