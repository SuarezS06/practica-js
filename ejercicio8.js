const alimentos = [
    ["manzana", "plátano", "naranja", "fresa"], // frutas
    ["lechuga", "brócoli", "espinaca"], // vegetales
    ["pollo","cerdo"], // carnes
    ["arroz"] // cereales
];

// ¿Cuántos elementos tiene la matriz?
console.log("total elementos Matriz:", alimentos.length);

// ¿Cuál es el array de la matriz que tiene más datos?
let mayor = 0
alimentos.forEach(categoriaAlimentos => {
  if (categoriaAlimentos.length > mayor){
    mayor = categoriaAlimentos.length
  }
});

console.log("Array mas grande contiene:", mayor)

// ¿Cuál es el array de la matriz que tiene menos datos?
let menor  = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
  menor = categoriaAlimentos.length
});

console.log("Array mas pequeño contiene:", menor)


// ¿Cuántos elementos en total tiene la matriz considerando todos los arreglos?
let sumatoria = 0
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
  
});

console.log("En total tenemos:", sumatoria, "alimentos")