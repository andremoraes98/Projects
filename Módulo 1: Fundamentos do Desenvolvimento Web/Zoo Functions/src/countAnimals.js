const data = require('../data/zoo_data');

const countAnimalsOfSpecificSex = (typeOfAnimal, sex) => {
  const checkAnimalName = (specie) => specie.name === typeOfAnimal;
  const checkSex = (resident) => resident.sex === sex;
  return data.species.filter(checkAnimalName)[0].residents
    .filter(checkSex).length;
};

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const animalNames = data.species.map((specie) => specie.name);
    const lengthOfEachAnimal = data.species.map((specie) => specie.residents.length);
    const defaultObj = {};
    animalNames.forEach((eachAnimal, index) => {
      defaultObj[eachAnimal] = lengthOfEachAnimal[index];
    });
    return defaultObj;
  }

  const { specie: typeOfAnimal } = animal;
  const { sex: sexOfAnimal } = animal;
  if (sexOfAnimal) {
    return countAnimalsOfSpecificSex(typeOfAnimal, sexOfAnimal);
  }
  return data.species.filter((specie) => specie.name === typeOfAnimal)[0].residents.length;
}

console.log(countAnimals({ specie: 'otters', sex: 'female' }));

module.exports = countAnimals;
