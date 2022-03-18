// 3 - gerar tags spans com palavras contidas no input
const generate = document.querySelector('#criar-carta');
const textInput = document.querySelector('#carta-texto');
const paragraphId = '#carta-gerada';
let paragraphLetter = document.querySelector(paragraphId);
let wordCounter = 0; // para o item 18

function generateLetter() {
  const contentLetter = textInput.value;
  paragraphLetter = document.querySelector(paragraphId);
  let word = '';
  paragraphLetter.innerText = '';
  for (let index = 0; index < contentLetter.length; index += 1) {
    const span = document.createElement('span');
    if (contentLetter[index + 1] === ' ' || index === contentLetter.length - 1) {
      word += contentLetter[index];
      span.innerText = word;
      paragraphLetter.appendChild(span);
      wordCounter += 1;
      word = '';
    } else if (contentLetter[index] !== ' ') {
      word += contentLetter[index];
    }
  }
}

generate.addEventListener('click', generateLetter);

// 5 - criar um alert quando o conteudo for vazio

function showAlert() {
  const contentLetter = textInput.value;
  paragraphLetter = document.querySelector(paragraphId);
  let contador = 0;
  for (let index = 0; index < contentLetter.length; index += 1) {
    if (contentLetter[index] === ' ') {
      contador += 1;
    }
  }
  if (contador === contentLetter.length || !contentLetter) {
    paragraphLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

generate.addEventListener('click', showAlert);

// 16 - atribuir classes aleatoriamente

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function addClass() {
  const words = document.querySelectorAll('span');

  for (let index = 0; index < words.length; index += 1) {
    words[index].className = '';
    const randomStyle = Math.trunc(Math.random() * 3);
    const randomSize = Math.trunc(Math.random() * 3);
    const randomRotate = Math.trunc(Math.random() * 2);
    const randomInclinacao = Math.trunc(Math.random() * 2);

    words[index].classList.add(style[randomStyle]);
    words[index].classList.add(size[randomSize]);
    words[index].classList.add(rotate[randomRotate]);
    words[index].classList.add(inclinacao[randomInclinacao]);
  }
}

generate.addEventListener('click', addClass);
paragraphLetter.addEventListener('click', addClass);

// 18 - criar um contador de palavras

function countWords() {
  const numberOfWords = document.querySelector('#carta-contador');
  numberOfWords.innerText = wordCounter;
  wordCounter = 0;
}

generate.addEventListener('click', countWords);
