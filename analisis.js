import { getMediana } from './mediana.js';

// Utils

const formatCurrency = (value) => `$ ${Number.parseFloat(value).toFixed(2)}`;

// Calculadora de medianas

const salariosCol = colombia.map((persona) => persona.salary);

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);

const medianaGeneralCol = getMediana(salariosColSorted);

const inputMedianaGeneral = document.getElementById("promedioSalario");

inputMedianaGeneral.value = formatCurrency(medianaGeneralCol);

// mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = getMediana(salariosColTop10);

const promedioSalarioTop10 = document.getElementById("promedioSalarioTop10");
promedioSalarioTop10.value = formatCurrency(medianaTop10);

// Salario mayor

const MayorSalario = document.getElementById("MayorSalario");
MayorSalario.value = formatCurrency(salariosColSorted[salariosColSorted.length - 1]);

// Salario menor

const MenorSalario = document.getElementById("MenorSalario");
MenorSalario.value = formatCurrency(salariosColSorted[0]);

/*console.log({
    medianaGeneralCol,
    medianaTop10,
});*/

console.log(salariosCol);