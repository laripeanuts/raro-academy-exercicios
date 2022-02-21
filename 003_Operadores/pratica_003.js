// PRÁTICA AULA 3 - OPERADORES
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. Faça um algoritmo que calcule a fórmula de equação quadrática ("fórmula de bháskara").
var bhaskara = function quadratica(a, b, c) {
    var delta = (Math.sqrt(b * b) - (4 * a * c));
    var denominador = (2 + a);
    if (delta < 0) {
        console.log("Negativo, não existe raízes reais!");
        return;
    }
    else {
        var x1 = (-b + delta) / denominador;
        var x2 = (-b - delta) / denominador;
        var resposta = "Valor de delta \u00E9 ".concat(delta, " e \u00E9 positivo.Portanto, coeficiente 1 \u00E9 ").concat(x1, " e coefienciete 2 \u00E9 ").concat(x2);
        return console.log(resposta);
    }
};
bhaskara(0, 20, 30);
// 2. Faça um algoritmo que recebe três valores numéricos, `a`, `b` e `c`. A partir dos valores recebidos, você precisa verificar se os valores forma um `triângulo equilátero`, um `triângulo isósceles` ou um triângulo escaleno.
var qualTriangulo = function (x, y, z) {
    if (x == y && x == z) {
        return "Equilátero";
    }
    else if (x == y || y == z || z == x) {
        return "Isósceles";
    }
    else {
        return "Escaleno";
    }
};
console.log(qualTriangulo(5, 5, 5));
console.log(qualTriangulo(5, 5, 4));
console.log(qualTriangulo(5, 2, 4));
// 3. Faça um algoritmo que recebe um array de numeros, e retorne um novo array, com os objetos ordenados. Pede-se que não se utilize métodos prontos do objeto de array, como o [array.sort()] Espera-se que você construa o algoritmo por completo. `Dica`: boas escolhas para esta implementação: `bubble sort` ou `selection sort`.
var bubbleSort = function (array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array;
};
var numeros = [7, 30, 11, 27, 17, 10, 26, 5];
console.log(bubbleSort(numeros));
// // Para os exercícios 4, 5 e 6, considere os dois conjuntos abaixo:
var a = [1, 2, 3, 4, 5, 6];
var b = [4, 4, 5, 6, 7, 8];
// 4. Implementar a união dos grupos a e b. Os valores do objeto resultante devem ser todos únicos
var uniao = __spreadArray(__spreadArray([], a, true), b, true);
console.log(uniao);
// 5. Implementar a interseção dos gupos a e b.
var inter = function (a, b) {
    var result = [];
    while (a.length > 0 && b.length > 0) {
        if (a[0] < b[0]) {
            a.shift();
        }
        else if (a[0] > b[0]) {
            b.shift();
        }
        else {
            result.push(a.shift());
            b.shift();
        }
    }
    return result;
};
console.log(inter(a, b));
// 6. Implementar a diferença de a e b
var a = [1, 2, 3, 4, 5, 6];
var b = [4, 4, 5, 6, 7, 8];
var dif = function (a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            result.push(a[i]);
        }
    }
    return result;
};
console.log(dif(a, b));
