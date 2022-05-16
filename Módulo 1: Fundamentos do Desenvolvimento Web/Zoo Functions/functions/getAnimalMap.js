const data = require('../data/zoo_data');

const completeRegionSorted = (region, arrayOfRegion) => {
  data.species.forEach((specie) => {
    if (specie.location === region) {
      const nameOfAnimal = data.species
        .filter((typeOfAnimal) => typeOfAnimal.name === specie.name)[0].name;

      const animalResidents = specie.residents.reduce((acc, currentValue) => {
        acc.push(currentValue.name);
        return acc;
      }, []);
      arrayOfRegion.push({ [nameOfAnimal]: animalResidents.sort() });
    }
  });
};

const getAnimalsOfRegion = (region, arrayOfRegion) => {
  data.species.forEach((specie) => {
    if (specie.location === region) {
      const nameOfAnimal = data.species
        .filter((typeOfAnimal) => typeOfAnimal.name === specie.name)[0].name;
      arrayOfRegion.push(nameOfAnimal);
    }
  });
};

const defaultParam = () => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];

  getAnimalsOfRegion('NE', NE);
  getAnimalsOfRegion('NW', NW);
  getAnimalsOfRegion('SE', SE);
  getAnimalsOfRegion('SW', SW);

  return { NE, NW, SE, SW };
};

const completeRegion = (region, arrayOfRegion) => {
  data.species.forEach((specie) => {
    if (specie.location === region) {
      const nameOfAnimal = data.species
        .filter((typeOfAnimal) => typeOfAnimal.name === specie.name)[0].name;

      const animalResidents = specie.residents.reduce((acc, currentValue) => {
        acc.push(currentValue.name);
        return acc;
      }, []);
      arrayOfRegion.push({ [nameOfAnimal]: animalResidents });
    }
  });
};

const completeRegionSex = (region, arrayOfRegion, sex) => {
  data.species.forEach((specie) => {
    if (specie.location === region) {
      const nameOfAnimal = data.species
        .filter((typeOfAnimal) => typeOfAnimal.name === specie.name)[0].name;

      const animalResidents = specie.residents.reduce((acc, currentValue) => {
        if (currentValue.sex === sex) {
          acc.push(currentValue.name);
        }
        return acc;
      }, []);
      console.log(arrayOfRegion);
      arrayOfRegion.push({ [nameOfAnimal]: animalResidents });
    }
  });
};

const completeRegionSexSorted = (region, arrayOfRegion, sex) => {
  data.species.forEach((specie) => {
    if (specie.location === region) {
      const nameOfAnimal = data.species
        .filter((typeOfAnimal) => typeOfAnimal.name === specie.name)[0].name;

      const animalResidents = specie.residents.reduce((accumulator, currentValue) => {
        if (currentValue.sex === sex) {
          accumulator.push(currentValue.name);
        }
        return accumulator;
      }, []);
      console.log(arrayOfRegion);
      arrayOfRegion.push({ [nameOfAnimal]: animalResidents.sort() });
    }
  });
};

const completeAllRegionSex = (region1, region2, region3, region4, sex) => {
  completeRegionSex('NE', region1, sex);
  completeRegionSex('NW', region2, sex);
  completeRegionSex('SE', region3, sex);
  completeRegionSex('SW', region4, sex);
};

const completeAllRegionIncludeName = (region1, region2, region3, region4) => {
  completeRegion('NE', region1);
  completeRegion('NW', region2);
  completeRegion('SE', region3);
  completeRegion('SW', region4);
};

const completeAllRegionSorted = (region1, region2, region3, region4) => {
  completeRegionSorted('NE', region1);
  completeRegionSorted('NW', region2);
  completeRegionSorted('SE', region3);
  completeRegionSorted('SW', region4);
};

const completeAllRegionSexSorted = (region1, region2, region3, region4, sex) => {
  completeRegionSexSorted('NE', region1, sex);
  completeRegionSexSorted('NW', region2, sex);
  completeRegionSexSorted('SE', region3, sex);
  completeRegionSexSorted('SW', region4, sex);
};

const putTheAnimalInRegion = (options) => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];

  if (options.sorted && options.sex) {
    completeAllRegionSexSorted(NE, NW, SE, SW, options.sex);
  } else if (options.sorted) {
    completeAllRegionSorted(NE, NW, SE, SW);
  } else if (options.sex) {
    completeAllRegionSex(NE, NW, SE, SW, options.sex);
  } else {
    completeAllRegionIncludeName(NE, NW, SE, SW);
  }
  return { NE, NW, SE, SW };
};

function getAnimalMap(options) {
  if (options && options.includeNames) {
    return putTheAnimalInRegion(options);
  } return defaultParam();
}

module.exports = getAnimalMap;
