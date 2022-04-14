"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.fromPairs = void 0;
/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 *
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 *
 * @param args
 * @returns
 */
var fromPairs = function (args) {
    // obj = Object.assign(obj, key);
    var obj = args.reduce(function (o, key) { return Object.assign.apply(Object, __spreadArray(__spreadArray([], o, false), [key, {}], false)); });
    console.log(obj);
    return null;
};
exports.fromPairs = fromPairs;
var array = [['a', 'a'], ['b', 1], ['c', false]];
console.log((0, exports.fromPairs)(array));
//{ a: 'a', b: 1, c: false }
