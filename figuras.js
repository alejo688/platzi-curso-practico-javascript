// Código del cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;
console.groupEnd();

// Código del triángulo
console.group("Triángulo");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

// Código del círculo
console.group("Círculos");

// PI
const PI = Math.PI;

// Diámetro
const diametroCirculo = (radio) => radio * 2;

// Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

//Área
const areaCirculo = (radio) => (radio * radio) * PI;

console.groupEnd();


// Aquí interactuamos con el HTML

// Funciones calculo cuadrado

const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es: ${perimetro}`);
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`El área del cuadrado es: ${area}`);
}

// Funciones calculo Triangulo

const calcularPerimetroTriangulo = () => {
    const inputTrianguloLado1 = document.getElementById("InputTrianguloLado1");
    const inputTrianguloLado2 = document.getElementById("InputTrianguloLado2");
    const inputTrianguloBase = document.getElementById("InputTrianguloBase");
    const lado1 = parseInt(inputTrianguloLado1.value);
    const lado2 = parseInt(inputTrianguloLado2.value);
    const base = parseInt(inputTrianguloBase.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(`El perimetro del triángulo es: ${perimetro}`);
}

const calcularAreaTriangulo = () => {
    const InputTrianguloBase = document.getElementById("InputTrianguloBase");
    const InputTrianguloAltura = document.getElementById("InputTrianguloAltura");
    const area = areaTriangulo(InputTrianguloBase.value, InputTrianguloAltura.value);
    alert(`El área del triángulo es: ${area}`);
}

// funciones calculo circulo

const calcularDiametroCirculo = () => {
    const input = document.getElementById("InputRadio");
    const diametro = diametroCirculo(input.value);
    alert(`El diametro del circulo es: ${diametro}`);
}

const calcularPerimetroCirculo = () => {
    const input = document.getElementById("InputRadio");
    const perimetro = perimetroCirculo(input.value);
    alert(`El perimetro del circulo es: ${perimetro}`);
}

const calcularAreaCirculo = () => {
    const input = document.getElementById("InputRadio");
    const area = areaCirculo(input.value);
    alert(`El área del circulo es: ${area}`);
}