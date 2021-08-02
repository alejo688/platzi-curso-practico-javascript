const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    3,
    3,
    3,
    100,
    100,
    100,
    100,
    100
];

const calcularModa = (lista) => {

    const listaCount = {};

    lista.map((elemento) => (listaCount[elemento]) ? listaCount[elemento] += 1 : listaCount[elemento] = 1);

    const listaArray = Object.entries(listaCount)
        .sort((elementoA, elementoB) => elementoA[1] - elementoB[1]);

    const valorMaximo = listaArray[listaArray.length - 1][1];

    const media = listaArray.filter((elemento) => elemento[1] === valorMaximo);

    return media;
};

console.log(calcularModa(lista1));

/*const lista1Count = {};

lista1.map((elemento) => {
    if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
    } else {
        lista1Count[elemento] = 1;
    }
});

const lista1Array = Object.entries(lista1Count).sort(
    (elementoA, elementoB) => {
        return elementoA[1] - elementoB[1];
    });

const moda = lista1Array[lista1Array.length - 1];*/