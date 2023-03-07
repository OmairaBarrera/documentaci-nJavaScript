/*Metodo repeat
    construye y devuelve copias de una cadena.
*/

let cadena = "Te mereces cosas increibles y punto";
let cadena2 = "Lo unico imposible es lo que no intentas.";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo repeat</h2>
${cadena}<br>
${cadena.repeat(25)}<br>
${cadena2.repeat(5)}
` 
console.log(cadena.repeat(25));
console.log(cadena2.repeat(5));
