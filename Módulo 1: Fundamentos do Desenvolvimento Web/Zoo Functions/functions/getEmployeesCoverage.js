const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getIdOfEmployee = (iDNameOrLastname) => {
  const employeesId = employees.map((employee) => employee.id);
  const employeesName = employees.map((employee) => employee.firstName);
  const employeesLastName = employees.map((employee) => employee.lastName);
  let id = '';
  if (employeesId.includes(iDNameOrLastname)) {
    id = iDNameOrLastname;
  } else if (employeesName.includes(iDNameOrLastname)) {
    id = employees.filter((employee) => employee.firstName === iDNameOrLastname)[0].id;
  } else if (employeesLastName.includes(iDNameOrLastname)) {
    id = employees.filter((employee) => employee.lastName === iDNameOrLastname)[0].id;
  }
  return id;
};

const completeNameOfEmployee = (iDOfEmployee) => {
  const { firstName } = data.employees.filter((employee) => employee.id === iDOfEmployee)[0];
  const { lastName } = data.employees.filter((employee) => employee.id === iDOfEmployee)[0];
  return `${firstName} ${lastName}`;
};

const getAnimalNameById = (id) => data.species.filter((specie) => specie.id === id)[0].name;

const getSpeciesEmployee = (iDOfEmployee) => {
  const idOfAnimalsCoverByEmployee = employees
    .filter((employee) => employee.id === iDOfEmployee)[0].responsibleFor;
  return idOfAnimalsCoverByEmployee.map((id) => getAnimalNameById(id));
};

const getAnimalLocationByName = (animal) => data.species
  .filter((specie) => specie.name === animal)[0].location;

const getLocationsOfEachAnimalsOfEmployee = (animals) => animals
  .map((animal) => getAnimalLocationByName(animal));

const getEmployeeCoverage = (IdOrNameOrLastName) => {
  const id = getIdOfEmployee(IdOrNameOrLastName);
  const fullName = completeNameOfEmployee(id);
  const species = getSpeciesEmployee(id);
  const locations = getLocationsOfEachAnimalsOfEmployee(species);
  return { id, fullName, species, locations };
};

function getEmployeesCoverage(employeeIdOrNameOrLastName) {
  const employeesfirstName = data.employees.map((employee) => employee.firstName);
  const employeesLastName = data.employees.map((employee) => employee.lastName);
  const employeesId = data.employees.map((employee) => employee.id);
  const employeesNameIdLastname = [...employeesfirstName, ...employeesLastName, ...employeesId];
  if (employeeIdOrNameOrLastName) {
    const idOrName = Object.values(employeeIdOrNameOrLastName)[0];
    if (employeesNameIdLastname.includes(idOrName)) {
      return getEmployeeCoverage(idOrName);
    } throw new Error('Informações inválidas');
  } return data.employees.map((employee) => getEmployeeCoverage(employee.id));
}

console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
