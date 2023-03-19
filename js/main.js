/* Funciones Autoejecutables
crear una funcion y ejecutarla sobre la marcha
*/

// Función autoejecutable
(function () {
    console.log("Hola!!");
})();

// Función autoejecutable con parámetros
(function (name) {
    console.log(`¡Hola, ${name}!`);
})("Manz");

// Funcion autoejecutable con return
const f = (function (name) {
    return `¡Hola, ${name}!`;
})("Manz");

console.log(f); // '¡Hola, Manz!`
console.log(typeof f); // 'string'







  

