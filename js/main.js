/*Metodo slice
    extrae seccion de una cadena y devuelve una nueva cadena.
*/

let cadena = "No importa que tan lento vayas mientras no te detengas.";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo Slice</h2>
${cadena}<br>
${cadena.slice(25,50)}

` 
console.log(cadena.slice(25,50));
