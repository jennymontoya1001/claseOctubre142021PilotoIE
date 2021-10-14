
// Condicional Múltiple

let desc = 0;
let totalPagar = 0;

let nombre = prompt('Ingrese nombre');
let valorCompra = Number(prompt('Ingrese valor compra'));
let bolita = prompt('Ingrese color');

if(bolita === 'blanca'){
   desc = valorCompra * 0;
}
else if(bolita === 'verde'){
    desc = valorCompra * 0.1;
}
else if(bolita === 'amarilla'){
    desc = valorCompra * 0.25;
}
else if(bolita === 'azul'){
    desc = valorCompra *  0.5;
}
else if(bolita === 'roja'){
    desc = valorCompra * 1;
}
else{
    desc = valorCompra * 0;
    alert('El color no es válido');
}

 totalPagar = valorCompra - desc;
 alert(`El cliente ${nombre} sacó la bolita de color ${bolita} 
 y su total a pagar es: ${totalPagar}`);