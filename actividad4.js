//Función 3:
//Crear una función que solicite dos arreglos númericos, debera retornar
//la suma de ambos arreglos siempre que tengan el mismo número de elementos
//de lo contrario, devolver array vacio []
function sumarArreglos(arreglo1 = [], arreglo2 = []) {
    if (arreglo1.length > arreglo2.length){
        return [];
    }
    if(arreglo2.length > arreglo1.length){
        return [];
    }
    let resultado= [];
    arreglo1.forEach((numero, indice)=>{
        resultado.push(numero + arreglo2[indice])
    })
    return resultado;
}

console.log(sumarArreglos([1,2,3], [4,5,6]))









//Función 4:
//Crear un función que solicite un número positivo y retorne todos los divisores 
//desde 1 hasta el número que hayas indicado. El resultado se obtiene
//como arreglo. Ejemplo: 22 -> [1,2,11,22] Ejemplo: 40 -> [1,2,4,5,8,10,20,40]
function divisoresDe5(numero = 0) {
    let resultado = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0){
            resultado.push(i)
        }
    }
    return resultado;
}

console.log(divisoresDe5(22))
console.log(divisoresDe5(21))
console.log(divisoresDe5(44))