//Switch Case

let fruta = prompt('Ingrese fruta');

switch(fruta.toLocaleLowerCase()){
    case 'mango':
    alert(`El ${fruta} cuesta $10.000`);
    break;
    case 'fresa':
    alert(`La ${fruta} cuesta $12.000`);
    break;
    case 'banano':
    case 'coco':
    alert(`El ${fruta} cuesta $12.000`);
    break;
    default:
    alert(`La fruta ${fruta} se encuentra agotada`);
}