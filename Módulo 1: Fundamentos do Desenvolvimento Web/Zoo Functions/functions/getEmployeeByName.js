const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const firstName = data.employees
    .filter((employee) => employee.firstName === employeeName)[0];
  const lastName = data.employees
    .filter((employee) => employee.lastName === employeeName)[0];
  if (firstName) {
    return firstName;
  }
  if (lastName) {
    return lastName;
  }
  return {};
}

console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
