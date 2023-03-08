/*Metodo Search
    Indica el indice de un substring
*/

let cadena = "Llena tu espiritu de triunfo";

document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo search</h2>
${cadena}<br>
${cadena.search('u')}

` 
console.log(cadena.search('u'));

