let nameField = document.getElementById("name")
let breedField = document.getElementById("breed")
let imgField = document.getElementById("pet-image")

let savePetButton = document.getElementById("save-pet")

savePetButton.addEventListener("click", async (event) =>{
    event.preventDefault();
    let  name = nameField.value
    let breed = breedField.value
    let img = imgField.value

    let pet = { name, breed, img}
    console.log(pet)
    let result = await savePet(pet)
    console.log(result)
    printAllPets(data)
})
const savePet = async (pet) => {
    let response = await fetch(
      "https://pets-32401-default-rtdb.firebaseio.com/.json",
      {
        method: "POST",
        body: JSON.stringify(pet),
      }
    );
    let data = await response.json();
    return data;
  };
  const getAllPets = async () => {
    let response = await fetch(
      "https://pets-32401-default-rtdb.firebaseio.com/.json"
    );
    let data = await response.json();
    printAllPets(data);
  };
  const createPetItem=(petData)=>{
    let {name,breed,img,key} = petData
    let petCard = document.createElement("div");
    petCard.classList.add("card")
    let imgCard = document.createElement("img")
    imgCard.setAttribute("src", img)
    imgCard.classList.add("card-img-top")
    let bodyCard = document.createElement("div")
    bodyCard.classList.add("card-body")
    let nameCard = document.createElement("h5")
    nameCard.classList.add("card-title")
    let textCardName = document.createTextNode(`Nombre: ${ name}  `)
    nameCard.append(textCardName)
    let breedCard = document.createElement("h5")
    breedCard.classList.add("card-title")
    let textCardBreed = document.createTextNode(`Raza: ${ breed}  `)
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-danger")
    let deleteButtonText = document.createTextNode("Delete pet")
    deleteButton.append(deleteButtonText)
    deleteButton.addEventListener("click", async () => {
        let data = await deletePet(key);
        getAllPets();
      })
    breedCard.append(textCardBreed)
    bodyCard.append(nameCard,breedCard,deleteButton)
    petCard.append(imgCard,bodyCard)
    
    
    return petCard
}

const printAllPets = (pets) =>{
    console.log(pets)
    let petCards = document.getElementById("pet-cards")
    petCards.innerHTML = ""

    let petsArray = Object.keys(pets).map((key) => ({ ...pets[key], key }));
    console.log(petsArray);

    petsArray.forEach((pet) => {
        let petItem = createPetItem(pet);
        petCards.append(petItem);
      });

}
 getAllPets()
  
 const deletePet = async (petKey) => {
    let response = await fetch(
      `https://pets-32401-default-rtdb.firebaseio.com/${petKey}.json`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    return data;
  };
   