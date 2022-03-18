// 2 - adicionar um texto com os códigos RGB;

const codeRGB = document.querySelector('#rgb-color');
let code1Text = 'rgb(';
code1Text += Math.trunc(((Math.random() * 255) + 1)).toString();
code1Text += ', ';
let code2Text = Math.trunc(((Math.random() * 255) + 1)).toString();
code2Text += ', ';
let code3Text = Math.trunc(((Math.random() * 255) + 1)).toString();
code3Text += ')';
codeRGB.innerHTML += code1Text + code2Text + code3Text;

// 4 - adicionar as cores aleatórias nas bolas

const balls = document.querySelectorAll('.ball');
let code1Ball;
let code2Ball;
let code3Ball;

let rgbBallColor;

balls[0].style.backgroundColor = codeRGB.innerHTML;

for (let index = 1; index < balls.length; index += 1) {
  rgbBallColor = 'rgb( ';
  code1Ball = Math.trunc(((Math.random() * 255) + 1)).toString();
  code1Ball += ', ';
  code2Ball = Math.trunc(((Math.random() * 255) + 1)).toString();
  code2Ball += ', ';
  code3Ball = Math.trunc(((Math.random() * 255) + 1)).toString();
  code3Ball += ' )';
  rgbBallColor += code1Ball + code2Ball + code3Ball;
  balls[index].style.backgroundColor = rgbBallColor;
}

// 5 - se a cor clicada for a correta, exibir mensagem "Acertou". Se não, "Errou! Tente novamente";

const ballsSection = document.querySelector('#all-balls');
const answer = document.querySelector('#answer');

function checkAnswerAndScore(event) {
  const score = document.querySelector('#point');
  let point = parseInt(score.innerText, 10);
  if (event.target.style.backgroundColor === codeRGB.innerText) {
    answer.innerText = 'Acertou!';
    point += 3;
    score.innerText = point;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

ballsSection.addEventListener('click', checkAnswerAndScore);

// 6 - implementação do botão reset;

const resetButton = document.querySelector('#reset-game');

function resetColor() {
  codeRGB.innerHTML = '';
  code1Text = 'rgb(';
  code1Text += Math.trunc(((Math.random() * 255) + 1)).toString();
  code1Text += ', ';
  code2Text = Math.trunc(((Math.random() * 255) + 1)).toString();
  code2Text += ', ';
  code3Text = Math.trunc(((Math.random() * 255) + 1)).toString();
  code3Text += ')';
  codeRGB.innerHTML += code1Text + code2Text + code3Text;
}

function resetBall() {
  balls[0].style.backgroundColor = codeRGB.innerHTML;

  for (let index = 1; index < balls.length; index += 1) {
    rgbBallColor = 'rgb( ';
    code1Ball = Math.trunc(((Math.random() * 255) + 1)).toString();
    code1Ball += ', ';
    code2Ball = Math.trunc(((Math.random() * 255) + 1)).toString();
    code2Ball += ', ';
    code3Ball = Math.trunc(((Math.random() * 255) + 1)).toString();
    code3Ball += ' )';
    rgbBallColor += code1Ball + code2Ball + code3Ball;
    balls[index].style.backgroundColor = rgbBallColor;
  }
}

function resetAnswer() {
  answer.innerText = 'Escolha uma cor:';
}

resetButton.addEventListener('click', resetColor);
resetButton.addEventListener('click', resetBall);
resetButton.addEventListener('click', resetAnswer);

// 7 - implementar um score;
