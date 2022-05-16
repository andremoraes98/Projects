const data = require('../data/zoo_data');

const schedule = {};

const completeOfficeHourOfDays = (dayOfWeek) => {
  let officeHour = '';
  if (dayOfWeek === 'Monday') {
    officeHour = 'CLOSED';
    return officeHour;
  }
  const indexOfDay = Object.keys(data.hours).indexOf(dayOfWeek);
  const hour = Object.values(data.hours)[indexOfDay];
  officeHour = `Open from ${hour.open}am until ${hour.close}pm`;
  return officeHour;
};

const completeExhibitionOfDay = (dayOfWeek) => {
  let exhibition = [];
  if (dayOfWeek === 'Monday') {
    const mondayPhrase = 'The zoo will be closed!';
    return mondayPhrase;
  }
  exhibition = data.species.filter((specie) => specie.availability.includes(dayOfWeek))
    .map((specie) => specie.name);
  return exhibition;
};

const completeDay = (day) => {
  const officeHour = completeOfficeHourOfDays(day);
  const exhibition = completeExhibitionOfDay(day);
  return { officeHour, exhibition };
};

const completeDays = (objOfTime) => {
  const myObj = objOfTime;
  myObj.Tuesday = completeDay('Tuesday');
  myObj.Wednesday = completeDay('Wednesday');
  myObj.Thursday = completeDay('Thursday');
  myObj.Friday = completeDay('Friday');
  myObj.Saturday = completeDay('Saturday');
  myObj.Sunday = completeDay('Sunday');
  myObj.Monday = completeDay('Monday');
  return myObj;
};

const getTheScheduleOfLastDays = (otherObjectSchedule, otherDay) => {
  let keyOfDay;
  if (otherDay === 'Friday') {
    const { Friday } = otherObjectSchedule;
    keyOfDay = { Friday };
  } else if (otherDay === 'Saturday') {
    const { Saturday } = otherObjectSchedule;
    keyOfDay = { Saturday };
  } else if (otherDay === 'Sunday') {
    const { Sunday } = otherObjectSchedule;
    keyOfDay = { Sunday };
  } else if (otherDay === 'Monday') {
    const { Monday } = otherObjectSchedule;
    keyOfDay = { Monday };
  }
  return keyOfDay;
};

const getTheScheduleOfDay = (objectSchedule, day) => {
  let keyOfDay;
  if (day === 'Tuesday') {
    const { Tuesday } = objectSchedule;
    keyOfDay = { Tuesday };
  } else if (day === 'Wednesday') {
    const { Wednesday } = objectSchedule;
    keyOfDay = { Wednesday };
  } else if (day === 'Thursday') {
    const { Thursday } = objectSchedule;
    keyOfDay = { Thursday };
  } else {
    keyOfDay = getTheScheduleOfLastDays(objectSchedule, day);
  }
  return keyOfDay;
};

const getDaysOfAnimal = (animal) => data.species
  .filter((specie) => specie.name === animal)[0].availability;

function getSchedule(scheduleTarget) {
  const daysOfWeek = Object.keys(data.hours);
  const nameOfAnimals = data.species.map((specie) => specie.name);
  const checkNameOfAnimals = nameOfAnimals.includes(scheduleTarget);
  const checkDaysOfWeek = daysOfWeek.includes(scheduleTarget);
  completeDays(schedule);
  if (checkDaysOfWeek) {
    return getTheScheduleOfDay(schedule, scheduleTarget);
  }
  if (checkNameOfAnimals) {
    return getDaysOfAnimal(scheduleTarget);
  }
  return schedule;
}

module.exports = getSchedule;
