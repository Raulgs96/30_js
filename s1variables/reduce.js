let numeros = [1, 2, 3, 4, 5];
let numeros2 = [5, 4, 3, 2, 1];



/*const suma = (array) =>{
    let result = array.reduce((accum, numero) =>{
        return accum + numero
    },0)
    return result
}

console.log(suma(numeros))*/

/*const order = (array) =>{
    return array.sort((a,b)=> b-a)
}
console.log(order(numeros))
*/
const factorial = (arrayOrdenado) =>{
   let facto = arrayOrdenado.reduce((accum, item)=>{
    return accum * item
   },1)
   return facto
}

console.log(factorial(numeros2))