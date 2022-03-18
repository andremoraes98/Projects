// 1 - fazer com que o input apareça na tela ;
const containerMeme = document.querySelector('#meme-image-container');
const inputText = document.querySelector('#text-input');

function showText() {
  const paragraphInput = document.querySelector('#meme-text');
  paragraphInput.innerText = inputText.value;
}

inputText.addEventListener('keyup', showText);

// 2 - criar uma div para que a imagem upada apareça;
const inputImage = document.querySelector('#meme-insert');

function imageShown() {
  const image = document.createElement('img');
  image.id = 'meme-image';
  image.src = URL.createObjectURL(inputImage.files[0]); // linha de código para gerar uma URL para o arquivo da imagem mandado para o site, retirado da fonte: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
  containerMeme.appendChild(image);
}
inputImage.addEventListener('change', imageShown);

// 6 - criar bordas customizáveis
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

function changeFire() {
  containerMeme.style.border = 'dashed 3px red';
}

function changeWater() {
  containerMeme.style.border = 'double 5px blue';
}

function changeEarth() {
  containerMeme.style.border = 'groove 6px green';
}

buttonFire.addEventListener('click', changeFire);
buttonWater.addEventListener('click', changeWater);
buttonEarth.addEventListener('click', changeEarth);

// 7 - acrescentar 4 imagens pré selecionadas para servir de memes

const footer = document.querySelector('footer');

function changeBackgroundPhoto(event) {
  const image = document.querySelector('#meme-image');
  if (image) {
    image.src = event.target.src;
  } else {
    const newImage = document.createElement('img');
    newImage.id = 'meme-image';
    newImage.src = event.target.src;
    containerMeme.appendChild(newImage);
  }
}

footer.addEventListener('click', changeBackgroundPhoto);
