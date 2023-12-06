//1.- Crear una funcion que reciba un texto y si el texto tiene 10 o mas caracteres imprimir que el texto es largo y si no que es corto
const textToEvaluate = (text)=>{
    let result = text.length >= 10 ? "El texto es largo" : "El texto es corto"
    return result
}

let finalResult=textToEvaluate("hola ")
console.log(finalResult)