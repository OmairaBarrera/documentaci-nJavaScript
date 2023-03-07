/*Metodo charcodeAt
    Devuelve el unicode de una posicion en especifico de la cadena
*/

let cadena = "La adversidad y la perseverancia pueden diseñar tu vida";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo CharCodeAt</h2>
${cadena}<br>
${cadena.charCodeAt(20)}<br>
${cadena.charCodeAt(30)}

` 
console.log(cadena.charCodeAt(20));
console.log(cadena.charCodeAt(30));
