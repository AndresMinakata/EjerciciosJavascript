// Escribir una función que tome un arreglo de números 
// y devuelva el número mayor de la lista. 
// Ejemplo del arreglo : [3, 5, 7, 1, 6]

let array = [3, 5, 7, 1, 6];
function maxNum(array){
    array.sort((a, b) => a - b);
    return array[array.length -1];
}//function MaxNum
console.log(`El array es: ${[array]}`);
console.log(`El valor más alto del array es: ${maxNum(array)}`);