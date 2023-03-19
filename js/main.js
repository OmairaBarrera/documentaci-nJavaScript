/* Funciones Callbacks
es pasar una función B por parámetro a una función A, de modo 
que la función A puede ejecutar esa función B de forma genérica 
desde su código
*/

// fB = Función B
const fB = function () {
    console.log("Función B ejecutada.");
};

// fA = Función A
const fA = function (callback) {
    callback();
};

fA(fB);







  

