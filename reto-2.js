console.log("%cReto 2 · Transformar y filtrar", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let numeros = [3, 8, 1, 6, 10, 4];


// 1) Arreglo nuevo con cada número multiplicado por 10
let porDiez = numeros.map(function(numero) {
  return numero * 10;
});


// 2) Arreglo nuevo solo con los mayores a 5
let mayoresA5 = numeros.filter(function(numero) {
  return numero > 5;
});


// Mostrar resultados
console.log('Por 10: [ "' + porDiez.join('", "') + '" ]');
console.log('Mayores a 5: [ "' + mayoresA5.join('", "') + '" ]');


console.log("");