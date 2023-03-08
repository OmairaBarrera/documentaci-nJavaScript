/*Metodo concat
    Une dos cadenas de texto
*/

let cadena = "Dedica tu tiempo a ";
let cadena2 = "leer un libro.";

document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo concat</h2>

${cadena.concat(' ', cadena2)}<br>
${cadena2.concat(' ', cadena)}<br>
${cadena.concat('disfrutar de la vida')}

` 
console.log(cadena.concat(' ', cadena2));
console.log(cadena2.concat(' ', cadena));
