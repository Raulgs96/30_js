/*
    1.- Crear una función que reciba un string, una posición inicial, una posición final, y nos devuelva 
    un nuevo string formado por los caracteres que se encuentren en las posiciones indicadas
    Input = "Regresamos a las sombras", 3, 8
    output = "resam"
*/

    const stringFunction = (text, firstPosition, lastPosition) => { //inicia la funcion con los tres parametros a recibir 
         if (firstPosition<text.length && lastPosition<= text.length){ //Evalua que los numeros ingresados esen dentro de los valores de la longitus del string 
            let newText= text.substring(firstPosition, lastPosition); // extrae los caracteres con los valores ingresados
              console.log(newText)                                 // imprime el nuevo string
            }else {
        console.log("Hay un error en la longitud del caracter")
            }
        }       
//let showNewString = 
stringFunction("Regresamos a las sombras", 5, 15)
//console.log(showNewString)

 /*    
     2.- Crear una función que utilice el string "La mejor forma de predecir el futuro es creándolo",
        y que reemplace todas las letras "e" por alguna otra letra indicada
        input => "d"
        output => "La mdjor forma dd prdddcir dl futuro ds crdándolo"
 */

    const replaceFunction = (string, letterToReplace, replacedLetter) =>{ 
       let str = string.replace(replacedLetter, letterToReplace) // se declara una variable y se le asigna el metodo con los valores a reemplazar
       return console.log(str)                                  //Nos devuelve e imprime el nuevo string 

    }
    replaceFunction("La mejor forma de predecir el futuro es creándolo",
    /* letra que ingresara el string*/  "z",
     /*letra que sera reemplazada en el string*/"e")

/*
     3.- Crear una función que reciba un string, un caracter cualquiera, y me indique la cantidad
        de veces que ese caracter se encuentra en el string
        input => "Merengue", "e"
        output => la letra "e" se usa 3 veces en la palabra "Merengue" 
*/

    const timesOfChar = (txt,char) =>{
        let counter = 0                     //inicializamos una variable como contador para asignarle las veces que existe el caracter

        if (txt.indexOf(char)!== -1){       //evalua que el caracter exista dentro del string 
            for (i=0; i<txt.length; i++){   //Recorremos el String posicion por posicion tan largo sea 
                if (txt.charAt(i)===char){  //Si el caracter existe 
                    counter ++;             //aumentamos en 1 el valor de nuestro contador 
                }
            }
        }
        else{                               //si no existe imprimimos un mensaje 
            console.log(`No existe el caracter "${char }" en el texto`)
        }
        console.log(`la letra "${char }" se encuentra ${counter } veces en el texto: "${txt}"`)

    }
    timesOfChar("merengue", "z")
    

  