/*Metodo replace
    Busca coincidencia y reemplaza, pero solo la primera.
*/

let cadena = "No importa que tan lento vayas mientras no te detengas.";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo Replace</h2>
${cadena}<br>
${cadena.replace('lento','rapido')}

` 
console.log(cadena.replace('lento','rapido'));
