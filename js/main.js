/*Metodo Length
    Indica el numero de unidades en la cadena
*/

let cadena = "Inicio de JavaScript con metodos de strings";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo Length</h2>
${cadena}<br>
${cadena.length}

` 
console.log(cadena.length);
