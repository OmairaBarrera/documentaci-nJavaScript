/* Operadores Logicos
    son aquellos que utilizamos en nuestro código para realizar comprobaciones.
    1. Operador AND
    2. Operador OR
    3. Operador NOT 
    4. Operador XOR 
*/

document.querySelector('.container').innerHTML = `

<h1>Operadores Logicos JavaScript</h1>
<h2>1. Operador AND</h2>
<p>Devuelve 1 si ambos operandos son 1,<br> 
    por ejemplo: <br> 1 & 1 = ${1 & 1} <br> 0 & 1 = ${0 & 1}
</p>
<h2>2. Operador OR</h2>
<p>Devuelve 1 si al menos un operando es 1,<br> 
    por ejemplo: <br> 1 | 1 = ${1 | 1} <br> 1 | 0 = ${0 | 1}
</p>
<h2>3. Operador NOT </h2>
<p>Invierte los bits del operando (por ejemplo, 000101 pasa a 111010). Trunca a 32 bits,<br> 
    por ejemplo: <br> ~15 = ${~15} <br> ~0 = ${~0}
</p>
<h2>4. Operador XOR</h2>
<p>Devuelve 1 si ambos operandos son diferentes,<br> 
    por ejemplo: <br> 1 ^ 0  = ${1^0} <br> 1 ^ 1  = ${1^1}
</p>

` 


