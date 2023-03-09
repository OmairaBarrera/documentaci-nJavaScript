/* Operadores de Asignacion
    permiten asignar información a diferentes constantes o variables a través del símbolo =
    1. Asignación
    2. Suma y asignación
    3. Resta y asignación
    4. Multiplicación y asignación
    5. División y asignación
    6. Módulo y asignación
    7. Exponenciación y asignación
*/

let x = 5
let y = 6

document.querySelector('.container').innerHTML = `

<h1>Operadores de Asignacion JavaScript</h1>
<h2>1. Asignación</h2>
<p>Asigna el valor de la parte derecha (en este ejemplo, una suma) a c,<br> 
    por ejemplo: <br>  c = 5 + 6 : c = ${x+y}
</p>
<h2>2. Suma y asignación</h2>
<p>Es equivalente a a = a + b.,<br> 
    por ejemplo: <br>  ${x} += ${y} = ${x+=y} 
</p>
<h2>3. Resta y asignación</h2>
<p>Es equivalente a: a = a - b,<br> 
    por ejemplo: <br>  ${x} -= ${y} = ${x-=y} 
</p>
<h2>4. Multiplicación y asignación</h2>
<p>Es equivalente a a = a * b,<br> 
    por ejemplo: <br>  ${x} *= ${y} = ${x*=y}
</p>
<h2>5. División y asignación</h2>
<p>Es equivalente a a = a / b,<br> 
    por ejemplo: <br>  ${x} /= ${y} = ${x /= y}
</p>
<h2>6. Módulo y asignación</h2>
<p>Es equivalente a a = a % b.,<br> 
    por ejemplo: <br>  ${x} %= ${y} = ${x %= y}
</p>
<h2>7. Exponenciación y asignación</h2>
<p>Es equivalente a a = a ** b,<br> 
    por ejemplo: <br>  ${x} **= ${y} = ${x **= y}
</p>

` 


