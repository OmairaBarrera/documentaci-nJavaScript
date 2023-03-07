/*Metodo Includes
    Si comienza, termina o contiene una subcadena especifica.
*/

let cadena = "La conciencia de ser prudente, lleva a una vida de mejor coherencia";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo Includes</h2>
${cadena}<br>
${cadena.includes('c')}

` 
console.log(cadena.includes('c'));
