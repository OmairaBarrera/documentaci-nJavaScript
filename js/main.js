/*Metodo fromCharCode
    Creo cadena apartir del unicode
*/

document.querySelector('.container').innerHTML = `

<h1>Metodos String JavaScript</h1>
<h2>Metodo fromChartCode</h2>
${String.fromCharCode(65,66,67)}<br>
${String.fromCharCode(86,73,68,65)}

` 
console.log(String.fromCharCode(65,66,67));
console.log(String.fromCharCode(86,73,68,65));
