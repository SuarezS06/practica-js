const paises = [
    ["Perú", "Brasil", "Argentina", "Venezuela"], // América
    ["España", "Francia", "Italia", "Alemania"], // Europa
    ["Japón", "China", "Corea del Sur", "Taiwan"], // Asia
    ["Egipto", "Sudáfrica", "Marruecos", "Nigeria"] // África
];

//Mostrar los paises de Asia (unicamente) utilizando foreach
paises[2].forEach(pais => {
  console.log(pais)
  
});

//Agregar 2 paises en la lista de AMERICA
paises[0].push("Bolivia")
paises[0].push("Ecuador")

console.log("----------------------------------------")

paises[0].forEach(pais => {
  console.log(pais)
  
});
