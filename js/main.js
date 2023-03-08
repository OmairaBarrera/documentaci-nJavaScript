/*Metodo toLowerCase
    convierte una cadena de texto a minusculas
*/

let cadena = "LLENA TU ESPIRITU DE TRIUNFO";

document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo toLowerCase</h2>
${cadena}<br>
${cadena.toLowerCase()}

` 
console.log(cadena.toLowerCase());

