
let textBox = document.getElementById("get-txt") 
let mainTitle = document.getElementById ("title")

textBox.addEventListener("keyup", (event) => {
    let newTxt = event.target.value
    mainTitle.textContent = newTxt
   
});
