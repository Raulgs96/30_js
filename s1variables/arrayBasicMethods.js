
  
  
   let people = [
    ["Israel Salinas Martínez", 34, "israel@kodemia.mx"],
    ["Naomi López Puertos", 25, "naomi@kodemia.mx"],
    ["Charles Silva", 28, "charles@kodemia.mx"],
    ["David Moranchel", 29, "david@kodemia.mx"],
  ]

    //1.- Necesito recibir el nombre completo, edad y correo de una persona, y devolver un objeto que contenga esa información
  
     /* const newObject = (fullName, age, email) => {
        let person = [
          fullName = fullName,
          age = age,
          email = email
        ]
        return person
      }
      let newobj = newObject("Raul Gomez Sotelo", 27, "raulgs96@hotmail.com")
      console.log(newobj)
     */
     //2.- Tomando en cuenta la lista "people", necesito una nueva lista que contenga la información de cada persona pero agrupada en objetos

     /*const newList = (arrayData) => {
      let objects = []
      for (i=0; i<arrayData.length; i++){
        let personObject={

          fullName : arrayData[i][0],
          age : arrayData[i][1],
          email : arrayData[i][2]
        }
        objects.push(personObject)
      }
      return objects
     }
     console.log(newList(people))*/
     //3.- Necesito poder ordenar una lista de objetos que representen personas con base en su edad, de forma descendente
      const orderByAge = (dataArray) => {
        let orderedByAge = dataArray.sort((a, b) => b[1]- a[1]);
        return orderedByAge;
      };
      console.log(orderByAge(people))