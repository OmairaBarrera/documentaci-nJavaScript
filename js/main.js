/*Metodo endsWith
    Si finaliza con un caracter.
*/

let cadena = "Cuando te permites lo que mereces, atraes lo que necesitas";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo EndsWith</h2>
${cadena}<br>
${cadena.endsWith('s')}

` 
console.log(cadena.endsWith('s'));
