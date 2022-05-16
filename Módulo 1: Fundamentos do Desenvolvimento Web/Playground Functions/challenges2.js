// Desafio 10
function techList(tech, name) {
  let lista =[], techOrdenado = [], menor = 0;

  for ( let index = 0; index < tech.length; index +=1 ) {
    for ( let indice = 0; indice < tech.length; indice +=1 ) {
      if ( tech[index] <= tech[indice] ) {
        menor += 1
      }
      if ( menor === tech.length - index - 1 ) {
        
      }
    }
    techOrdenado[tech.length-menor] = tech[index]
    menor = 0;
  }

  if ( techOrdenado.length === 0 ) {
    return "Vazio!" // Se o tamanho do vetor for 0, eu retorno essa frase de aviso
  } else {
    for ( let key in techOrdenado ) {
      lista[key] = { //em cada posição do vetor gerado pelo for/in eu to inserindo um objeto com duas chaves
        tech: techOrdenado[key], name:name
      }
    }
    return lista //no final eu retorno essa lista com os objetos
  }
}

// Desafio 11
function generatePhoneNumber(phone) {
  let phoneRight = '('

  for ( let indice = 0; indice < phone.length; indice += 1 ) {
    let iguais = 0;
    for ( let index = 0; index < phone.length; index += 1 ) {
      if ( phone[indice] === phone[index] ) {
        iguais += 1;
      }
    }
    if ( iguais >= 3 ) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    iguais = 0;
  } 

  if ( phone.length !== 11 ) {
    return "Array com tamanho incorreto."
  } else {
    for (let index = 0; index < phone.length; index += 1 ) {
      if ( phone[index] > 9 || phone[index] < 0 ) {
        return "não é possível gerar um número de telefone com esses valores"
      } else {
        phoneRight += phone[index]
        if ( index === 1 ) {
          phoneRight += ') '
        }
        if ( index === 6 ) {
          phoneRight += '-'
        }
      }
    }
  }  
  return phoneRight
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  //a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
  //maior que o valor absoluto da diferença entre essas medidas
  if ( lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) || lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) || lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB) ) {
    return true
  } else {
    return false
  }
}

// Desafio 13
function hydrate(bebidas) {
  let regex = /\d+/g;
  let quantidade;
  let coposDeAgua = 0;

  quantidade = bebidas.match(regex)

  for ( let index = 0; index < quantidade.length; index += 1 ) {
    coposDeAgua += parseInt(quantidade[index])
  }
  
  if ( coposDeAgua > 1 ) {
    return coposDeAgua + " copos de água"
  } else {
    return coposDeAgua + " copo de água"
  }
}

console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
