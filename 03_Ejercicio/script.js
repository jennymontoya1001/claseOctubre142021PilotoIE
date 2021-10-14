
// Condicional Múltiple

let frutaR = prompt('Ingrese fruta');

let fruta = frutaR.toLocaleLowerCase();

if(fruta === 'mango'){
    alert(`El precio de la fruta ${fruta} es $15.000`);
}else if(fruta === 'fresa'){
    alert(`El precio de la fruta ${fruta} es $12.000`);
}else if(fruta === 'banano'){
    alert(`El precio de la fruta ${fruta} es $10.000`);
}else{
    alert(`La fruta ${fruta} se encuentra agotada`);
} 

//Condicional ternario

   fruta === 'mango' ? 
   alert(`El precio de la fruta ${fruta} es $15.000`)
   : fruta === 'fresa' ?
   alert(`El precio de la fruta ${fruta} es $12.000`)
   : fruta === 'banano'?
   alert(`El precio de la fruta ${fruta} es $10.000`)
   : 
   alert(`La fruta ${fruta} se encuentra agotada`)