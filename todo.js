//selectors for getting elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners

//add listener to add button and calls on function to create new element
todoButton.addEventListener('click', addTodo);
//adding an event listener to delete items? change so it MOVES ITEMS TO TRASH HTML page
todoList.addEventListener('click', deleteCheck);

//functions

//todo list item with buttons at the end
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    //outputting input value to new element in list
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";
}

//function delete check - use to move item to trash page
function deleteCheck(e) {
  const item = e.target;
  //delete todo OR MOVE TO TRASH PAGE
  if(item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
        //find a way to make this put this item to trash html page
        todo.remove();
    })
  }

  //check mark to mark as completed - LEAVE AS IS and focus on moving trash to other page
  if (item.classList[0] === "complete-btn") {   
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}