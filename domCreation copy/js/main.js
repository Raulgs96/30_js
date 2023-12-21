/*
  1.- Activar el formulario para poder agregar usuarios ( solo se pide el nombre completo)
  2.- Activar el botón "eliminar". Este botón debe eliminar al usuario al que corresponde
  3.- Activar el botón "ordenar por nombre". Este botón debe ordenar de forma alfabéticamente ascendente la lista de usuarios
  4.- Activar el filtro por nombre: Debe filtrar la lista de usuarios conforme se escribe algo en el input
  */
let inText = document.getElementById("inText");
let addUser = document.getElementById("addUser-btn");
let userList = document.getElementById("userList");
let sortByName = document.getElementById("sort-by-name");
let filteredName = document.getElementById("filter-by-name")

let listNames = [];

addUser.addEventListener("click", () => {
  let userName = inText.value;
  if (userName) {
    listNames.push(userName);
    inText.value = " ";
    printNames(listNames);
  }
  console.log(listNames);
});

const createUserItem = (userItem, userIndex) => {
  console.log("otro userIndex", userIndex);
  let newUserItem = document.createElement("li");
  newUserItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  let newUserSpan = document.createElement("span");
  let newUserText = document.createTextNode(userItem);

  newUserItem.appendChild(newUserSpan);
  newUserSpan.appendChild(newUserText);
  let deleteUserButton = document.createElement("button");
  deleteUserButton.classList.add("btn", "btn-danger");
  deleteUserButton.innerText = "X";

  newUserItem.appendChild(deleteUserButton);

  deleteUserButton.addEventListener("click", (event) => {
    /*listNames = listNames.splice();
    listNames = listNames.splice(userIndex, userIndex + 1);*/
    listNames.splice(userIndex, 1);
    printNames(listNames);
    console.log("userindex in button", userIndex);
  });

  return newUserItem;
};

const addNewUser = (userItem, userIndex) => {
  console.log("user-index", userIndex);
  userList.appendChild(createUserItem(userItem, userIndex));
};
console.log(userList);

const printNames = (usersList) => {
  while (userList.firstChild) {
    userList.removeChild(userList.firstChild);
  }
  usersList.forEach((user, index) => {
    console.log(index);
    console.log(user);
    addNewUser(user, index);
  });
};

printNames(listNames);

sortByName.addEventListener("click", (event)=>{
  listNames.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return printNames(listNames)
  
})



filteredName.addEventListener("keyup", (event) => {

  let value = event.target.value;
  let filterResult = listNames.filter((name) =>
    name.toLowerCase().includes(value.toLowerCase())
  );
  
  console.log(filterResult);
  printNames(filterResult);
});

