const edades = [18, 22, 35, 40, 27, 19, 45, 60, 31, 24, 50, 38, 29, 55, 42];


//Mas alto, mas bajo y promedio
/*let mayor = 0
edades.forEach(edad => {
  if (edad > mayor){
    mayor = edad
  }
});

console.log("Edad mayor:", mayor)

console.log("--------------------------------------------------")

let menor  = edades[0].length
edades.forEach(edad => {
  menor = edad
});

console.log("Edad mas baja:", menor)*/

let mayor = 0, menor = edades[0], promedio = 0;

edades.forEach(edad => {
    if (edad > mayor) mayor = edad;
    if (edad < menor) menor = edad;
    promedio += edad;
});

promedio = (promedio / edades.length).toFixed(2);

console.log("Total de edades:", edades.length);
console.log("La mayor edad:", mayor);
console.log("La menor edad:", menor);
console.log("El Promedio:", promedio);
