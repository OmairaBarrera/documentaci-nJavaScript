/*Metodo lastindexOf
    Indica el ultimo indice de un substring y desde una posicion indicada
*/

let cadena = "Llena tu espiritu de triunfo";

document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo indexOf</h2>
${cadena}<br>
${cadena.indexOf('u')}<br>
${cadena.lastIndexOf('u')}

` 
console.log(cadena.indexOf('u'));
console.log(cadena.lastIndexOf('u'));
