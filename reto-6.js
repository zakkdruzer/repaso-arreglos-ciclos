console.log("%cReto 6 · Recorrer una matriz", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let matriz = [
  [1, 2, 3],
  [4, 5, 6]
];


// 1) Mostrar cada [fila][columna] = valor
// 2) Calcular la suma de todos los números
let sumaTotal = 0;

for (let fila = 0; fila < matriz.length; fila++) {
  for (let columna = 0; columna < matriz[fila].length; columna++) {
    console.log("[" + fila + "][" + columna + "] = " + matriz[fila][columna]);
    sumaTotal += matriz[fila][columna];
  }
}

console.log("Suma total:", sumaTotal);


console.log("");