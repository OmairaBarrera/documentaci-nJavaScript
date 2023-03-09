/* Operadores de Comparacion
    son aquellos que utilizamos en nuestro código para realizar comprobaciones.
    1. Operador de igualdad
    2. Operador de desigualdad
    3. Operador mayor que
    4. Operador mayor/igual que
    5. Operador menor que
    6. Operador menor/igual que
    7. Operador de identidad 
    8. Operador no idéntico
*/

document.querySelector('.container').innerHTML = `

<h1>Operadores de Comparacion JavaScript</h1>
<h2>1. Operador de igualdad</h2>
<p>Comprueba si el valor de a es igual al de b. No comprueba tipo de dato,<br> 
    por ejemplo: <br> 4 == 5 = ${4 == 5} <br> 4 == 4 = ${4 == 4}
</p>
<h2>2. Operador de desigualdad</h2>
<p>Comprueba si el valor de a no es igual al de b. No comprueba tipo de dato,<br> 
    por ejemplo: <br> 4 != 5 = ${4 != 5} <br> 4 != 4 = ${4 != 4}
</p>
<h2>3. Operador mayor que</h2>
<p> Comprueba si el valor de a es mayor que el de b,<br> 
    por ejemplo: <br> 4 > 5 = ${4 > 5} <br> 15 > 4 = ${15 > 4}
</p>
<h2>4. Operador mayor/igual que</h2>
<p> Comprueba si el valor de a es mayor o igual que el de b,<br> 
    por ejemplo: <br> 4 >= 5 = ${4 >= 5} <br> 15 >= 4 = ${15 >= 4} <br> 6 >= 6 = ${6 >= 6}
</p>
<h2>5. Operador menor que</h2>
<p>  	Comprueba si el valor de a es menor que el de b.,<br> 
    por ejemplo: <br> 4 < 5 = ${4 < 5} <br> 15 < 4 = ${15 < 4}
</p>
<h2>6. Operador menor/igual que</h2>
<p> Comprueba si el valor de a es menor o igual que el de b,<br> 
    por ejemplo: <br> 4 <= 5 = ${4 <= 5} <br> 15 <= 4 = ${15 <= 4} <br> 6 <= 6 = ${6 <= 6}
</p>
<h2>7. Operador de identidad </h2>
<p> Comprueba si el valor y el tipo de dato de a es igual al de b,<br> 
    por ejemplo: <br> 4 === 5 = ${4 === 5} <br> 15 === 15 = ${15 === 15} <br> 6 === '6' = ${6 === '6'}
</p>
<h2>8. Operador no idéntico</h2>
<p> Comprueba si el valor y el tipo de dato de a no es igual al de b,<br> 
    por ejemplo: <br> 4 !== 5 = ${4 !== 5} <br> 15 !== '4' = ${15 !== '4'} <br> 6 !== 6 = ${6 !== 6}
</p>

` 


