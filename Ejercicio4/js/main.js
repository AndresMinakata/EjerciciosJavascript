// Escribir una función que tome un arreglo ordenado y devuelva un arreglo
// completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida:
// [105, 31, 14, 1, 2, 50, 24, 5]

let array =  [1, 2, 5, 14, 24, 31, 50, 105];
function mezclar(array) {
    let index = array.length,  randomIndex;
    while (index != 0) {
      randomIndex = (parseInt(Math.random() * index));
      index--;
      [array[index], array[randomIndex]] = [
        array[randomIndex], array[index]];
    }//while
  
    return array;
  }//function mezclar

mezclar(array);
console.log(array);