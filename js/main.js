/*Metodos Math.random
    Un número de coma flotante pseudo-aleatorio entre los números 0 (incluido) y 1 (excluido)
*/
console.log("Metodo math.random: devuelve valores entre 0 y 1");
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//Ejemplo de una funcion para obtener numeros aleatorios

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log("Funcion para devolver numeros aleatorios de un rango maximo")
console.log("Numero aleatorio entre 0 y 3")
console.log(getRandomInt(3));
console.log("Numero aleatorio entre 0 y 10")
console.log(getRandomInt(10));  







  

