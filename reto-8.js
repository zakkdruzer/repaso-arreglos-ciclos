console.log("%cReto 8 · La pelota que rebota", "font-weight: bold; color: green; font-size: 15px;");
console.log("");


let altura = 80;
let rebotes = 0;


// 1) Mientras la altura sea >= 10, cuenta el rebote
//    y muestra la nueva altura (la mitad de la anterior)
while (altura >= 10) {
  altura = altura / 2;
  rebotes++;

  console.log("Rebote " + rebotes + ": altura " + altura);
}


// 2) Muestra el total de rebotes
console.log("Total de rebotes:", rebotes);


console.log("");