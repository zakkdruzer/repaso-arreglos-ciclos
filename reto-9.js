console.log("%cReto 9 · La contraseña", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let claveCorrecta = "abc123";
let intentos = ["1234", "hola", "abc123"];
let i = 0;
let acerto = false;


// 1) Con do/while, prueba cada intento y muéstralo (✅ / ❌)
// 2) Detente al acertar o cuando se acaben los intentos
do {
  let intento = intentos[i];

  if (intento === claveCorrecta) {
    console.log("Intento: " + intento + " ✅");
    acerto = true;
  } else {
    console.log("Intento: " + intento + " ❌");
  }

  i++;
} while (!acerto && i < intentos.length);


// Mensaje final
if (acerto) {
  console.log("🔓 Acceso concedido");
} else {
  console.log("🔒 Acceso denegado");
}


console.log("");