/*Necesitamos recibir un string de más de una palabra, y devolver un nuevo string con las palabras en orden invertido.
Input: House dice que todos mienten
expected output: mienten todos que dice House
Input: Nunca es Lupus
expected output: Lupus es Nunca
*/
//1.- Saber el texto que sera utilizado (parametro)
//2.- dividir el texto en palabras(.split)
//3.- Invertir el orden de las palabras (reverse)
//4.- Unir las palabras en su nuevo lugar (join)
//5.- Retornar el nuevo resultado
let strExample = "House dice que todos mienten"
let strExample2 = "Lupus es Nunca"
const reverseString = (originalString) =>{
    let newString = originalString.split(" ").reverse().join(" "); //Array elementos separados
    //let invertedString = newString.reverse(); //Array invertido
    //let result = invertedString.join(" "); // Convierte un array a string
    //return result;
    return newString
}
console.log(reverseString(strExample));
console.log(reverseString(strExample2));