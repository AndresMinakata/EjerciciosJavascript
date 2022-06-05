
// María llega a su entrevista de trabajo para el rol de Desarrollador Junior 
// y se le pide que resuelva este problema:
// Dada una lista de números [-1, 3, 4, 2, 6], escribe una función
// en javascript para calcular el número más pequeño.

let array = [-1, 3, 4, 2, 6];
function minNum(array){
    array.sort((a, b) => b - a);
    return array[array.length -1];
}//function minNum
console.log(`El array es: ${array}`);
console.log(`El valor más pequeño del array es: ${minNum(array)}`);