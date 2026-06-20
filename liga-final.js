console.log("%cReto 10 · La Liga de Equipos · Jefe Final", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let equipos = ["Dragones", "Fénix", "Tigres"];
let puntos = [
  [10, 20, 15],   // Dragones
  [30, 20, 25],   // Fénix
  [5, 40, 20]     // Tigres
];


// 1) Muestra cuántos equipos compiten
console.log("Equipos:", equipos.length);


// 2) Con for anidado: total de puntos de cada equipo -> arreglo "totales"
let totales = [];

for (let i = 0; i < equipos.length; i++) {
  let suma = 0;

  for (let j = 0; j < puntos[i].length; j++) {
    suma += puntos[i][j];
  }

  totales.push(suma);
  console.log(equipos[i] + ": " + suma);
}


// 3) Muestra el arreglo "totales"
console.log('Totales: [ "' + totales.join('", "') + '" ]');


// 4) Calcula el PROMEDIO general de los totales
let sumaTotales = 0;

for (let i = 0; i < totales.length; i++) {
  sumaTotales += totales[i];
}

let promedio = sumaTotales / totales.length;
console.log("Promedio general:", promedio.toFixed(2));


// 5) Con filter: totales que superan el promedio
let sobreElPromedio = totales.filter(function(total) {
  return total > promedio;
});

console.log('Sobre el promedio: [ "' + sobreElPromedio.join('", "') + '" ]');


// 6) Ranking de totales de mayor a menor (sort)
let ranking = [...totales].sort(function(a, b) {
  return b - a;
});

console.log('Ranking: [ "' + ranking.join('", "') + '" ]');


// 7) Nombre del CAMPEÓN (el del total más alto)
let mayorTotal = Math.max(...totales);
let indiceCampeon = totales.indexOf(mayorTotal);
let campeon = equipos[indiceCampeon];

console.log("🏆 Campeón:", campeon);


// 8) Con while: reparte premios de $30 desde un fondo de $100
let fondo = 100;
let premios = 0;

while (fondo >= 30) {
  fondo = fondo - 30;
  premios++;
  console.log("Premio entregado, queda $" + fondo);
}

console.log("Premios entregados:", premios, "(sobran $" + fondo + ")");


console.log("");