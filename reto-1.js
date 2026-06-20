console.log("%cReto 1 · El cajón de frutas", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

let cajon = ["manzana", "pera", "kiwi"];

// 1) Agregar "mango" al final del arreglo
cajon.push("mango");

// 2) Verificar si incluye "pera"
let tienePera = cajon.includes("pera");

// 3) Mostrar cuántas frutas hay
let totalFrutas = cajon.length;

// 4) Mostrar la primera y la última fruta
let primeraFruta = cajon[0];
let ultimaFruta = cajon[cajon.length - 1];

// Mostrar resultados
console.log('Cajon: [ "' + cajon.join('", "') + '" ]');
console.log("¿Hay pera?:", tienePera);
console.log("Total:", totalFrutas);
console.log("Primera:", primeraFruta, "| Última:", ultimaFruta);

console.log("")