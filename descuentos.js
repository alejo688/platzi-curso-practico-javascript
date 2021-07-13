function validarCupon(codigo) {
    const cupones = [
        {
            codigo: "PQEK-9932-SD21",
            descuento: 20
        },
        {
            codigo: "PQEK-76E1-FE87",
            descuento: 30
        },
        {
            codigo: "PQEK-54FS-JH75",
            descuento: 15
        },
        {
            codigo: "PQEK-32FS-GF76",
            descuento: 10
        },
    ];

    const existeCupon = cupones.find(function(cupon){
        return cupon.codigo === codigo;
    });

    return existeCupon;
}

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
}

function onClickButtonPriceCoupon() {

    const resultCoupon = document.getElementById("ResultCoupon");

    const inputPrice = document.getElementById("InputPriceCoupon");
    const priceValue = inputPrice.value;

    const inputCode = document.getElementById("InputCodeCoupon");
    const codeValue = inputCode.value;

    const infoCoupon = validarCupon(codeValue);

    if (infoCoupon === undefined) {
        resultCoupon.innerText = "El cupón ingresado no es valido.";
    } else {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, infoCoupon.descuento);

        resultCoupon.innerText = `El precio con descuento del ${infoCoupon.descuento}% es: $${precioConDescuento}`;
    }
}