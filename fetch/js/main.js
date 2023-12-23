
const getAllUsers = async () =>{
    let response = await fetch("https://js30g-64554-default-rtdb.firebaseio.com/users/.json")
    let data = await response.json()
    console.log(data)
}
const saveUser = async () =>{
    let response = await fetch("https://js30g-64554-default-rtdb.firebaseio.com/users/.json",
    {
        method: "POST",
        body: JSON.stringify({name: "juan", lastname: "Sotelo", age: "32"}),
    }

)
    let data= await response.json()
    console.log(data)
}