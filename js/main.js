/*Metodo split
    porciona dependiendo de especificaciones.
*/

let cadena = "Dedica tu tiempo a disfrutar la vida porque es eso lo unico que te hara verdaderamente feliz.";
let cadena2 = "La vida es como un libro.";
document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo split</h2>
${cadena}<br>
${cadena.split(' ')}<br>
${cadena.split(' ').length}<br>
${cadena2}<br>
${cadena2.split(' ')}<br>
${cadena2.split(' ').length}
` 
console.log(cadena.split(' '));
console.log(cadena.split(' ').length);
console.log(cadena2.split(' '));
console.log(cadena2.split(' ').length);
