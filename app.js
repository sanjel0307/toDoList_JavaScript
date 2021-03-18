const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener("click", addTodo)



function addTodo(event) { 
    event.preventDefault(); //stops page from refreshing 

    const todoDiv = document.createElement("div"); //creates Todo Div 
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li"); //creates list elements 
    newTodo.innerText = "check!";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button"); // creates the tick button
    completedButton.innerHTML = '<i class ="fas fa-check"></i>'
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button"); // creates the trash button
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>'
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}