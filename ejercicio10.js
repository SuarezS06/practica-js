//Obejtos = JSON (Javascript Notation)
//Estructura que guarda datos utilizando {key: value}

let perfil = {
  apellidos: "Suarez Moreno",
  nombres: "Samuel Alejandro",
  edad: 21,
  telefonos: ["924414160", "931679185", "9652134156"],
  formacion: [
    {nivel: "Primaria", nombre: "San jose", anio: 2000 },
    {nivel: "Secundaria", nombre: "JPB", anio: 2005 },
    {nivel: "Superior", nombre: "SENATI", anio: 2010 }
  ],
  habilidades: [
    {skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"]},
    {skill: "Lenguajes de programacion", herramientas: ["Javascript", "PHP", "Java", "C#", "Python"]},
    {skill: "Sistemas operativos", herramientas: ["Windows", "Linux", "Android"]}
  ]
}

//Habilidades en programacion
console.log(perfil.habilidades[1].herramientas)

//Cual es el nombre del centro de form,acion secundaria
console.log(perfil.formacion[1].nombre)

//Cuantos telefonos tiene la persona
console.log(perfil.telefonos.length)

//Mostrra cada uno de los motores de base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(Element => {
  console.log(Element)
})