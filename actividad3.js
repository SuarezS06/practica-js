//Funcion 1:
//Crear una función que reciba un arreglo de números y retorne como resultado
//un objeto indicándonos cuántos valores son pares e impares
//Test, demostración, console.log

function clasificarParImpar(lista = []){
    let cantidadPares = 0;
    let cantidadImpares = 0;

    for (const n of lista) {
        if (n % 2 === 0) {
            cantidadPares++;
        }else{
            cantidadImpares++;
        }
    }
    return {
        pares: cantidadPares,
        impares: cantidadImpares
    }
}

console.log(clasificarParImpar ([10, 15, 22, 33, 40, 51, 8, 6]))








//Funcion 2:
//Escribir una función que retorne true | false dependiendo si el valor de entrada 
//corresponde a un número capicúa. 121, 444, 3223. solo permite analizar valores
//de hasta 5 digitos (99999)
//Test, demostración, console.log
function esCapicua(numero = 0) {
    if (numero < 0 || numero > 99999) {
        return false;
    }
    const texto = String(numero);
    let invertido = "";
    texto.split("").forEach(digito => {
        invertido = digito + invertido;
    })
    return texto == invertido
}

console.log(esCapicua(222))
console.log(esCapicua(121))
console.log(esCapicua(123))
console.log(esCapicua(888))
console.log(esCapicua(345))