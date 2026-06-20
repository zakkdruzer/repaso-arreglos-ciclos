console.log("%cReto 5 · Pasar lista", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let alumnos = ["Sofía", "Mateo", "Valentina", "Tomás"];


// 1) Recorre con un for y muestra "N° N: nombre"
// 2) La numeración debe empezar en 1
for (let i = 0; i < alumnos.length; i++) {
  console.log("N° " + (i + 1) + ": " + alumnos[i]);
}


console.log("");