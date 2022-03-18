// Desafio 1
function compareTrue(par1, par2) {
  if ( par1 === true && par2 === true ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area
  area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(string) {
  let sentenceSplited = [];
  let words = '';
  for ( let index = 0; index < string.length; index += 1 ) {
    if ( string[index] !== ' ') {
      words += string[index];
    } else {
      sentenceSplited.push(words)
      words = '';
    }
  }
  sentenceSplited.push(words)
  return sentenceSplited;
}

// Desafio 4
function concatName(arrayOfString) {
  let words = '', ultimaPosicao;
  ultimaPosicao = arrayOfString.length-1;
  words += arrayOfString[ultimaPosicao];
  words += ', ';
  words += arrayOfString[0];
  return words
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints, points = 0;
  winPoints = wins * 3;
  points = winPoints + ties;
  return points
}

// Desafio 6
function highestCount(array) {

  function findHigher(array) {
    let higher = array[0];
    for (let index = 0; index < array.length; index += 1 ) {
      if (array[index] > higher) {
        higher = array[index];
      }
    }
    return higher
  }

  let counter = 0;
  for (let index = 0; index < array.length; index += 1 ) {
    if ( findHigher(array) === array[index] ) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1, distCat2, victory;
  distCat1 = Math.abs(mouse - cat1)
  distCat2 = Math.abs(mouse - cat2)

  if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge"
  } else if (distCat1 > distCat2) {
    return "cat2"
  }
  return "cat1"
}

// Desafio 8
function fizzBuzz(array) {
  let divisor = [];

  for ( let index = 0; index < array.length; index += 1 ) {
    if ( array[index] % 3 === 0 && array[index] % 5 === 0) {
      divisor.push('fizzBuzz')
    } else if ( array[index] % 3 === 0 ) {
      divisor.push('fizz')
    } else if ( array[index] % 5 === 0 ) {
      divisor.push('buzz')
    } else {
      divisor.push('bug!')
    }
  }

  return divisor
}

// Desafio 9
function encode(string) {

  let words = ''
  
  for (let index = 0; index < string.length; index += 1 ) {
    if ( string[index] === 'a' ) {
      words += '1'
    } else if ( string[index] === 'e' ) {
      words += '2'
    } else if ( string[index] === 'i' ) {
      words += '3'
    } else if ( string[index] === 'o' ) {
      words += '4'
    } else if ( string[index] === 'u' ) {
      words += '5'
    } else {
      words += string[index]
    }
  }
  return words
}

function decode(string) {
  let words = ''
  
  for (let index = 0; index < string.length; index += 1 ) {
    if ( string[index] === '1' ) {
      words += 'a'
    } else if ( string[index] === '2' ) {
      words += 'e'
    } else if ( string[index] === '3' ) {
      words += 'i'
    } else if ( string[index] === '4' ) {
      words += 'o'
    } else if ( string[index] === '5' ) {
      words += 'u'
    } else {
      words += string[index]
    }
  }
  return words
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
