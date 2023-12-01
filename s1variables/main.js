
//1.- Crear una función que me entregue la suma de dos números

function addition(num1,num2){
    let result = num1 + num2
    return result
}
console.log(addition(5,5))

//2,. Crear una función que evalúe si un número es par o impar

function evenOrOdd (number){
    let result
    result = number%2===0 ?  "El numero es par" :  "el numero es impar"
    console.log(result)
}
(evenOrOdd(5))

//3,. Crear una función que escriba en consola letra por letra de un nombre
function letterByLetter (name){
    for (i=0; i<=name.length; i++){
        console.log(name[i])
    }
}
console.log(letterByLetter("Raul Gomez"))

