//En toral, la matriz tiene 15 peliculas
const peliculas = [
    ["El exorcista", "Hereditary", "El conjuro", "Psicosis", "Halloween"],
    ["Toy Story", "El rey León", "Frozen", "Mi villano favorito", "Shrek"],
    ["¿Qué pasó ayer?", "Superbad", "Son como niños", "La máscara", "Y dónde están las rubias"]
];

//Mostrar las 15 peliculas en la consola
peliculas.forEach(generoPeliculas => {
  generoPeliculas.forEach(pelicula => {
    console.log(pelicula)
  });
});