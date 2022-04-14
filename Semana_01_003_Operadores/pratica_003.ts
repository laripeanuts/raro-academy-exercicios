// PRÁTICA AULA 3 - OPERADORES

// 1. Faça um algoritmo que calcule a fórmula de equação quadrática ("fórmula de bháskara").

const bhaskara = (a: number, b: number, c: number) => {
  const delta: number = (Math.sqrt(b * b) - (4 * a * c));
  let denominador: number = (2 + a);

  if (delta < 0) {
    console.log("Negativo, não existe raízes reais!");
    return;
  } else {
    let x1: number = (-b + delta) / denominador;
    let x2: number = (-b - delta) / denominador;
    let resposta: string = `Valor de delta é ${delta} e é positivo.Portanto, coeficiente 1 é ${x1} e coefienciete 2 é ${x2}`;
    return console.log(resposta);
  }
}
bhaskara(0, 20, 30);

// 2. Faça um algoritmo que recebe três valores numéricos, `a`, `b` e `c`. A partir dos valores recebidos, você precisa verificar se os valores forma um `triângulo equilátero`, um `triângulo isósceles` ou um triângulo escaleno.

let qualTriangulo = function (x: number, y: number, z: number) {
  if (x == y && x == z) {
      return "Equilátero"
  } else if (x == y || y == z || z == x) {
      return "Isósceles";
  } else {
      return "Escaleno";
  }
}
console.log(qualTriangulo(5, 5, 5));
console.log(qualTriangulo(5, 5, 4));
console.log(qualTriangulo(5, 2, 4)); 

// 3. Faça um algoritmo que recebe um array de numeros, e retorne um novo array, com os objetos ordenados. Pede-se que não se utilize métodos prontos do objeto de array, como o [array.sort()] Espera-se que você construa o algoritmo por completo. `Dica`: boas escolhas para esta implementação: `bubble sort` ou `selection sort`.

let bubbleSort = function (array: Array<number>) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
    }
}
  return array;
}

let numeros = [7, 30, 11, 27, 17, 10, 26, 5];
console.log(bubbleSort(numeros));

// // Para os exercícios 4, 5 e 6, considere os dois conjuntos abaixo:

const a = [1, 2, 3, 4, 5, 6];
const b = [4, 4, 5, 6, 7, 8];

// 4. Implementar a união dos grupos a e b. Os valores do objeto resultante devem ser todos únicos

const uniao = function(arr1: number[], arr2: number[]) {
  let novoArray: number[] = arr1.concat(arr2);
  let unico = novoArray.filter(function(elem, index, self) {
  return index === self.indexOf(elem);
  });

  return unico
}
console.log(uniao(a, b));

// 5. Implementar a interseção dos gupos a e b.

const intersecao = function(a: Array<number>, b: Array<number>) {
  
  let novoArray: Array<number> = [];
  for(let i = 0; i < a.length; i++){
    for (let j = 0; j < b.length; j++){
      if (a[i]===b[j]){ 
        novoArray.push(b[j]);
        break;
      }
    }
  }
  return novoArray;
}

console.log(intersecao(a, b))

// 6. Implementar a diferença de a e b

let dif = function (a: Array<number>, b: Array<number>) {
  var result = [];
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(dif(a, b))

// Outra opção

const int = (
  conjuntoA: Array<number>,
  conjuntoB: Array<number>,
): Array<number> => {
  const resultado: Array<number> = [];
  for (let i = 0; i < conjuntoA.length; i++) {
    for (let j = 0; j < conjuntoB.length; j++) {
      if (conjuntoA[i] === conjuntoB[j]) {
        resultado.push(conjuntoA[i]);
      }
    }
  }
  return resultado;
}

console.log(int(a, b));