console.log("%cReto 3 · Las cuentas del mes", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let gastos = [1200, 3400, 800, 2600];


// 1) Calcular el total de gastos
let total = gastos.reduce(function(acumulador, gasto) {
  return acumulador + gasto;
}, 0);


// 2) Calcular el promedio
let promedio = total / gastos.length;


// Mostrar resultados
console.log("Total:", total);
console.log("Promedio:", promedio);


console.log("");