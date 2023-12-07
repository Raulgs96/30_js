/* 1.- necesito obtener el mismo string (somestring) pero con todas las letras en mayúscula */

const lowerCaseString = (originalString) =>{
    return originalString.toUpperCase()
  }
let changeToUpperCase = lowerCaseString("Cuanto más hacemos, más podemos hacer")
console.log(changeToUpperCase)


/*2.- necesito un nuevo string que contenga las palabras del string original que estén en
una posición non
- más más hacer
let originalString = "Cuanto más hacemos, más podemos• hacer"
*/

const getEvenWords = (str) =>{
    let arrayOfWords=str.split(" ")
    let evenWords = []
    for (i =0; i<arrayOfWords.length; i++){
        i % 2 === 1 ? evenWords.push(arrayOfWords[i]) : ""
        //console.log(arrayOfWords[i])
    }
            return evenWords.join(" ")
}
let phrase = getEvenWords("Cuanto más hacemos, más podemos• hacer")
console.log(phrase)  

/*3.- necesito saber cuántas palabras cortas hay en el string y cuántas palabras largas
las palabras cortas tienen menos de 5 caracteres, el resto son palabras largas 
*/

const words = (string) =>{
    let newString = string.split(" ")
    let longWords=0
    let shortWords=0
    for (i=0; i<newString.length; i++){
        if (newString[i].length<5){
            shortWords+=1
        }else{
            longWords+=1
        }
    }
    console.log(`palabras cortas ${shortWords} y palabras largas ${longWords}` )
}
words("La única diferencia entre el éxito y el fracaso es la capacidad de actuar")

/*4.- necesito un string igual al string original, pero con las vocales en mayúsculas
        -Cuanto más hacemos, más podemos hacer
        CUAntO mÁs hAcEmOs, mÁs pOdEmos hAcEr
*/

const changeVowels = (text) =>{
    let newText = text.replace(/[aeiouáéíóúü]/ig, function (match) {
        return match.toUpperCase();
    });
    console.log(newText)
}

changeVowels("cuanto más hacemos, más podemos hacer")
