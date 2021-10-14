
// Condicional doble

let numero = Number(prompt('Ingrese número'));

if(numero%2 === 0){
    alert(`El número ${numero} es par`);
}else{
    alert(`El número ${numero} es Impar`);
}

//Condicional ternario

numero%2===0 ? 
alert(`El número ${numero} es par`) :
alert(`El número ${numero} es Impar`)