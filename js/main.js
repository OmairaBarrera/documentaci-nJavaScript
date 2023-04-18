/* Callbacks
son funciones pasadas como argumentos a otras 
funciones para que sean ejecutadas en algún 
momento dentro de la ejecución de la función 
principal.
*/

/* Ejemplo de callbacks, donde se realizara una
funcion de division para ejecutarla cuando la 
necesitemos, ademas se crean otra dos funciones,
que al ejecutar la funcion principal se ejecutaran
para llegar al respectivo solucion de la division. 
*/

//Funcion para validar si un numero es cero
let validateZero = (p1)=>{
  return (p1) ? p1 : 1;
}
//Funcion para validar si los valores son numeros
let validateNumber = (p1)=>{
  return (isNaN(p1)) ? 0 : Number(p1);
}
//Funcion de division
let division = (num1, num2)=>{
  return validateNumber(num1) / validateZero(validateNumber(num2));
}

//Ejemplo 1
let resul = division(10,5);
console.log(resul) //imprime 2
/* Este resultado es dado a que valida los numeros,
y ademas valida si el denominador es cero, evitando
una operacion error 
*/

//Ejemplo 2
let resul1 = division("f", 4)
console.log(resul1) //imprime 0
/* En este caso valida que los dos parametros sean
numeros, sino devuelve cero
 */

//Ejemplo 3
let resul2 = division("re", "t")
console.log(resul2) //imprime 0
/* En este caso valida que los dos parametros sean
numeros, sino devuelve cero, ademas valida el 
denominador que si es cero no covierte el parametro
en numero 1.
 */




  

