// PRÁTICA AULA 3 - OPERADORES

// 1. Faça um algoritmo que calcule a fórmula de equação quadrática ("fórmula de bháskara").

let bhaskara = function quadratica (a: number, b: number, c: number) {
  const delta: number = (Math.sqrt(b * b) - (4 * a * c));
  let denominador: number = (2 + a);

  if (delta < 0) {
    console.log("Negativo, não existe raízes reais!");
    return;
  } else {
    let x1: number = (- b + delta) / denominador;
    let x2: number = (- b - delta) / denominador;
    let resposta: string = `Valor de delta é ${delta} e é positivo.Portanto, coeficiente 1 é ${x1} e coefienciete 2 é ${x2}`
    return console.log(resposta);
  }
}
bhaskara(0, 20, 30)

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

let uniao = [...a, ...b]
console.log(uniao);

// 5. Implementar a interseção dos gupos a e b.

let inter = function(a: Array<number>, b: Array<number>)
{
  var result = [];
  while( a.length > 0 && b.length > 0 ) {  
    if(a[0] < b[0] ){
      a.shift();
    } else if (a[0] > b[0] ) {
      b.shift();
    } else {
       result.push(a.shift());
       b.shift();
    }
  }

  return result;
}

console.log(inter(a, b))

// 6. Implementar a diferença de a e b

let dif = function (a: Array<number>, b: Array<number>) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(dif(a, b))