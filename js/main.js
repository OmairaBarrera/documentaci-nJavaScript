/*Metodo codePointAt
    Devuelve el unicode de una posicion en especifico de la cadena
*/

let cadena = "La adversidad y la perseverancia pueden diseñar tu vida";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo CodePointAt</h2>
${cadena}<br>
${cadena.codePointAt(20)}<br>
${cadena.codePointAt(30)}

` 
console.log(cadena.codePointAt(20));
console.log(cadena.codePointAt(30));
