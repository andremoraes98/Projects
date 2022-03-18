const loginButton = document.querySelector('#login');
const agreementCheckbox = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const formContent = document.querySelector('#evaluation-form');
const main = document.querySelector('main');
const comment = document.querySelector('#textarea');

function canLogin() {
  const emailValue = document.querySelector('#email').value;
  const passwordValue = document.querySelector('#password').value;
  if (emailValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', canLogin);

function statusCheck() {
  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreementCheckbox.addEventListener('click', statusCheck);

const getCheckedSubject = (array) => {
  const checkedSubjects = document.querySelectorAll('input[name="intent-topic"]:checked');
  let subjectStrings = 'Matérias:';
  for (let index = 0; index < checkedSubjects.length; index += 1) {
    if (index === checkedSubjects.length - 1) {
      subjectStrings = `${subjectStrings} ${checkedSubjects[index].value}`;
    } else {
      subjectStrings = `${subjectStrings} ${checkedSubjects[index].value}, `;
    }
  }
  array.push(subjectStrings);
  return array;
};

const saveValues = () => {
  const allValues = [];
  let nameValues = document.querySelector('#input-name').name;
  nameValues = `${nameValues}${document.querySelector('#input-name').value}`;
  nameValues = `${nameValues} ${document.querySelector('#input-lastname').value}`;
  let emailValues = document.querySelector('#input-email').name;
  emailValues = `${emailValues}${document.querySelector('#input-email').value}`;
  let houseValues = document.querySelector('#house').name;
  houseValues = `${houseValues}${document.querySelector('#house').value}`;
  let familyValues = 'Família: ';
  familyValues = `${familyValues}${document.querySelector('input[name="family"]:checked').value}`;
  let rateValues = 'Avaliação: ';
  rateValues = `${rateValues}${document.querySelector('input[name="rate"]:checked').value}`;
  let commentValue = document.querySelector('#textarea').name;
  commentValue = `${commentValue} ${document.querySelector('#textarea').value}`;
  allValues.push(nameValues, emailValues, houseValues, familyValues);
  getCheckedSubject(allValues);
  allValues.push(rateValues, commentValue);
  return allValues;
};

function datasOnForm(event) {
  const newForm = document.createElement('form');
  newForm.id = 'evaluation-form';
  event.preventDefault();
  for (let index = 0; index < saveValues().length; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = saveValues()[index];
    newForm.appendChild(newDiv);
  }
  main.replaceChild(newForm, formContent);
}

submitButton.addEventListener('click', datasOnForm);

const countCharacter = () => {
  const counter = document.querySelector('#counter');
  counter.innerHTML = 500 - comment.value.length;
};

comment.addEventListener('input', countCharacter);
