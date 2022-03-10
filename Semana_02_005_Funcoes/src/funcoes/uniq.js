"use strict";
exports.__esModule = true;
exports.uniq = void 0;
/**
 * Retorna um array com todos os elementos únicos.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
var uniq = function (args) {
    var resultado = args.sort().reduce(function (inicio, atual) {
        if (inicio.length === 0 || inicio[inicio.length - 1] !== atual) {
            inicio.push(atual);
        }
        return inicio;
    }, []);
    return resultado;
};
exports.uniq = uniq;
