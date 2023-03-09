/*Metodos Math.pow
    devuelve la base elevada al exponente
*/

console.log("Calcular el exponente de un numero")

console.log("Exponenciacion simple")
console.log("7 ^ 2 = ", Math.pow(7, 2));   
console.log("7 ^ 3 = ", Math.pow(7, 3));  
console.log("2 ^ 10 = ", Math.pow(2, 10));  

console.log("Exponenciacion exponentes fraccionales")
console.log("4 ^ 0.5 = ", Math.pow(4, 0.5));  // (raíz cuadrada de 4)
console.log("8 ^ 1/3 = ", Math.pow(8, 1/3));  // (raíz cúbica de 8)
console.log("2 ^ 0.5 = ", Math.pow(2, 0.5));  // (raíz cuadrada de 2)
console.log("2 ^ 1/3 = ", Math.pow(2, 1/3));  // (raíz cúbica de 2)

console.log("Exponenciacion exponentes con signo")
console.log("7 ^ -2 = ", Math.pow(7, -2));   
console.log("8 ^ -1/3 = ", Math.pow(8, -1/3)); 
console.log("Exponenciacion bases con signo")

console.log("-7 ^ 2 = ", Math.pow(-7, 2));   // (los cuadrados son positivos)
console.log("-7 ^ 3 = ", Math.pow(-7, 3));   // (El cubo de una base negativa puede ser negativo)
console.log("-7 ^ 0.5 = ", Math.pow(-7, 0.5)); // NaN (Los números negativos no tienen raíz cuadrada real)
console.log("-7 ^ 1/3 = ", Math.pow(-7, 1/3)); // NaN  




  

