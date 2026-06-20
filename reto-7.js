console.log("%cReto 7 · Buscar en el mapa", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let mapa = [
  ["🌿", "🌿", "⭐"],
  ["🌿", "🌿", "🌿"]
];


// 1) Recorre el mapa con for anidado
// 2) Muestra la fila y columna donde está la "⭐"
for (let f = 0; f < mapa.length; f++) {
  for (let c = 0; c < mapa[f].length; c++) {
    if (mapa[f][c] === "⭐") {
      console.log("⭐ encontrada en fila " + f + ", columna " + c);
    }
  }
}


console.log("");