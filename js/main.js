/*Metodo toUpperCase
    convierte una cadena de texto a mayusculas
*/

let cadena = "Llena tu espiritu de triunfo";

document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo toUpperCase</h2>
${cadena}<br>
${cadena.toUpperCase()}

` 
console.log(cadena.toUpperCase());

