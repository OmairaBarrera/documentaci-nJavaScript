/* Clausuras
una clausura o cierre se define como una función que «encierra» 
variables en su propio ámbito (y que continúan existiendo aún 
    habiendo terminado la función)
*/

// Clausura: Función incr()
const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();
  
  typeof incr; // 'function'
  incr(); // 1
  incr(); // 2
  incr(); // 3








  

