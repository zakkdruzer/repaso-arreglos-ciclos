console.log("%cReto 4 · Ordenar de menor a mayor", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let edades = [30, 5, 12, 8, 25];


// 1) Ordenarlas de menor a mayor
let ordenadas = edades.sort(function(a, b) {
  return a - b;
});


// Mostrar resultados
console.log('Ordenadas: [ "' + ordenadas.join('", "') + '" ]');


console.log("");