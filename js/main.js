/*Metodo startsWith
    Si comienza con un caracter.
*/

let cadena = "Cuando te permites lo que mereces, atraes lo que necesitas";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo StartsWith</h2>
${cadena}<br>
${cadena.startsWith('J')}

` 
console.log(cadena.startsWith('J'));
