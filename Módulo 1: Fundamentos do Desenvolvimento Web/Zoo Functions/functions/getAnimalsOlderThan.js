const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age = 0) {
  // seu código aqui
  return data.species.filter((specie) => specie.name === animal)[0].residents
    .every((uniqueAnimal) => uniqueAnimal.age > age);
}

module.exports = getAnimalsOlderThan;
