// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado mide: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triángulo mide: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);

const alturaTriangulo = 5.5;
console.log(`La altura lados del triángulo mide: ${alturaTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo} cm^2`);

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log(`El radio del círculo mide: ${radioCirculo} cm`);

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo mide: ${diametroCirculo} cm`);

// PI

const PI = Math.PI;
console.log(`PI es: ${PI}`);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del círculo mide: ${perimetroCirculo} cm`);

//Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del círculo mide: ${areaCirculo} cm^2`);

console.groupEnd();
