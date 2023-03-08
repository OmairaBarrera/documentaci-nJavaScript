/*Metodo indexOf
    Indica el indice de un substring y desde una posicion indicada
*/

let cadena = "Llena tu espiritu de triunfo";

document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo indexOf</h2>
${cadena}<br>
${cadena.indexOf('u')}<br>
${cadena.indexOf('u', 14)}

` 
console.log(cadena.indexOf('u'));
console.log(cadena.indexOf('u', 14));
