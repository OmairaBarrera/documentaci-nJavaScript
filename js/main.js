/*Metodo substring
    extrae seccion de una cadena y devuelve una nueva cadena.
*/

let cadena = "No importa que tan lento vayas mientras no te detengas.";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo Substring</h2>
${cadena}<br>
${cadena.substring(25,45)}<br>
${cadena.substring(-5,45)}

` 
console.log(cadena.substring(25,45));
console.log(cadena.substring(-5,45));
