import { calcularMediaAritmetica } from './promedio.js';
import * as ordering from './ordering.js';

const lista = [
    1000,
    250,
    520,
    400000,
    6034,
    345,
    765,
    325,
    2,
    765,
];

const lista1 = ordering.bubble(lista);

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}

console.log(mediana);