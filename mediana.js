import { calcularMediaAritmetica } from './promedio.js';
import * as ordering from './ordering.js';

/*const lista = [
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
];*/

//const lista1 = ordering.bubble(lista);

// Helpers or Utils
const esPar = ((numerito) => (numerito % 2 === 0));

// Mediana general
export const getMediana = ((lista) => {
    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);

        mediana = promedioElemento1y2;

    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
});

//console.log(getMediana(lista1));