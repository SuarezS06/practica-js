//Función 5:
//Crear una funcion autoejecutable que imprima cuantas horas , minutos y segundos 
//faltan para terminar el dia

(function (){
    const ahora = new Date()
    const horas = 23 - ahora.getHours()
    const minutos = 59 - ahora.getMinutes()
    const segundos = 59 - ahora.getSeconds()

console.log(`Faltan ${horas} horas, ${minutos} minutos y ${segundos} segundos`)
})();




//Función 6:
//Crear una funcion autoejecutable que solicite un numero (expresado en segundos) y nos 
//devuelva un saludo, despues del tiempo indicado (settimeowt)
(
    function () {
      const r1 = require("readline").createInterface({input: process.stdin, output: process.stdout })

    r1.question("Segundos: ", function (s) {
        r1.close()
        setTimeout(() => console.log("Hello"), s * 1000)
    })
    }
)();
