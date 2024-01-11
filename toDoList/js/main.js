//seleccion de campos de formulario

let taskField = document.getElementById("task-to-do");
let timeField = document.getElementById("time");
let timeAvailableField = document.getElementById("time-available");
let avalableMins = document.getElementById ("title")
timeAvailableField.addEventListener("keyup", (event) => {
  let min = event.target.value
  avalableMins.textContent = `Tienes ${min} minutos disponibles`
 
});
let selectedTask = []


let saveTask = document.getElementById("save-task");

const saveTaskToDo = async (task) => {
  let response = await fetch(
    "https://todolist-ae758-default-rtdb.firebaseio.com/.json",
    {
      method: "POST",
      body: JSON.stringify(task),
    }
  );
  let data = await response.json();
  return data;
};

saveTask.addEventListener("click", async (event) => {
  event.preventDefault();

  let task = taskField.value;
  let time = timeField.value;

  let taskToDo = { task, time };

  console.log(taskToDo);
  let result = await saveTaskToDo(taskToDo);
  console.log(result);
  getTask();
});
const getTask = async () => {
  let response = await fetch(
    "https://todolist-ae758-default-rtdb.firebaseio.com/.json"
  );
  let data = await response.json();

  printTask(data);
};
/*Función para obtener una tarea*/

const printTask = (tasks) => {
  console.log(tasks);
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  /*Aquí convertimos las tareas de la base de datos en un array*/
  let tasksArray = Object.keys(tasks).map((key) => ({ ...tasks[key], key }));
  console.log(tasksArray);

  /*iteramos en el array para crear un li por cada tarea*/
  tasksArray.forEach((task) => {
    let taskItem = createTaskTodo(task);
    taskList.append(taskItem);
  });
}


//Lita de tareas dinamica 
const createTaskTodo = (taskData) => {
  let { task, time, key } = taskData;
  let taskLi = document.createElement("li");
  taskLi.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  let taskLiText = document.createTextNode(` ${task}`);
  let timeSpan = document.createElement("span");
  let timeSpanText = document.createTextNode(` ${time} minutos `);
  timeSpan.append(timeSpanText);
  let mainTaskButton = document.createElement("button");
  mainTaskButton.classList.add("btn", "btn-success");
  let mainTaskButtonText = document.createTextNode("Main task");
  mainTaskButton.append(mainTaskButtonText)
  mainTaskButton.addEventListener("click", async (key) => {
    let data = await printNewTask(key);
    return data
    
  });
  taskLi.append(taskLiText, timeSpan, mainTaskButton);
  return taskLi;
};