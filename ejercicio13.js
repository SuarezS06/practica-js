//Formas de crear una función
function hacerAlgo(){

}

//F2: POR EXPRESIÓN
const saludo = function saludar (){
  return "Hola que tal"
}

console.log(saludo())

const suma = function sumar (num1, num2){
  return num1 + num2
}

console.log(suma(21 , 20))

//Tipops de funciones : Anonima (Funciones por expresión)
const mensaje = function (){
  return "Ingenieria de Software"
}

console.log(mensaje)    // Tipo de dato => function
console.log(mensaje());  // Ejecuta una función

//Para aplicar este tipo de funciones se requiere punto y comas ";" antes del llamado
//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo ). no olvidar ";"
/*
(Desxclaracion de la funcion)(ejecucion de la funcion);
*/
(
  function (){
    console.log("Hola que tal")
  }
)();

(
  function (nombre = ''){
    console.log('Bienvendio:', nombre)
  }
)('Katherine');

//Crea una funcion autoejecutable que calcule el promedio de 3 notas
//Estas funciones suelen ejecutar tareas sin retornar datos
(
  function (nota1, nota2, nota3){
    console.log((nota1+nota2+nota3) /3)
  }
)(14,12,20);