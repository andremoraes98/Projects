const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idOfAnimal = data.employees.filter((employee) => employee.id === id)[0].responsibleFor[0];
  return Object.values(data.species.filter((specie) => specie.id === idOfAnimal)[0].residents
    .reduce((acc, animal) => {
      console.log(acc, animal);
      if (acc.age > animal.age) {
        return acc;
      } return animal;
    }));
}

module.exports = getOldestFromFirstSpecies;
