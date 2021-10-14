//Switch Case

let dia = Number(prompt('Ingrese número'));

switch(dia){
    case 0:
        alert('El día de Domingo');
    break;
    case 1:
        alert('El día de Lunes');
    break;
    case 2:
        alert('El día de Martes');
    break;
    case 3:
        alert('El día de Miércoles');
    break;
    case 4:
        alert('El día de Jueves');
    break;
    case 5:
        alert('El día de Viernes');
    break;
    case 6:
        alert('El día de Sábado');
    break;
    default:
        alert('El día ingresado no es válido');
    break;
}