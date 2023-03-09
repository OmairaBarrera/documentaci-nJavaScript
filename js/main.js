/*Metodos Math.PI
    representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159.
*/

function calculaCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

console.log("Calcular cicunferencia, teniendo en cuenta que la formula es: 2*π*r, donde  π = ", Math.PI)
console.log("Calcular Circunferencia, donde el radio es: 1")
console.log("Circunferencia es: ",calculaCircunferencia(1)); 
console.log("Calcular Circunferencia, donde el radio es: 4")
console.log("Circunferencia es: ",calculaCircunferencia(4)); 
  

