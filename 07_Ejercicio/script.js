//Leer información por pantalla
// salario base, venta 1, 2 y 3

let nom, sb, v1, v2, v3;
let totalVentas = 0;
let com = 0;
let totalPagar = 0;

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nom = Number(document.getElementById('inputNombre').value)
    sb = Number(document.getElementById('inputSalarioBase').value)
    v1 = Number(document.getElementById('inputV1').value)
    v2 = Number(document.getElementById('inputV2').value)
    v3 = Number(document.getElementById('inputV3').value)

    totalVentas = v1 + v2 + v3;
    document.getElementById('inputTotalVenta').value = totalVentas;

    com = totalVentas * 0.1;
    document.getElementById('inputCom').value = com;

    totalPagar = sb + com;
    document.getElementById('inputTotalPagar').value = totalPagar;
})



