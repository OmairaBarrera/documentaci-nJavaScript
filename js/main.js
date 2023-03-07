/*Metodo charAt
    Devuelve el caracter de una posicion en especifico
*/

let cadena = "La adversidad y la perseverancia pueden diseñar tu vida";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo CharAt</h2>
${cadena}<br>
${cadena.charAt(10)}<br>
${cadena.charAt(25)}

` 
console.log(cadena.charAt(10));
console.log(cadena.charAt(25));
