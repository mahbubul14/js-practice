//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//event listeners
todoButton.addEventListener("click", addTodo);
// completedButton.addEventListener('click', completeBtn);
todoList.addEventListener("click", delBtn);

//functions

function addTodo(event) {
      event.preventDefault();
// todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");
//create li
const newTodo = document.createElement ('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add ("complete-btn");
todoDiv.appendChild(completedButton);
// trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
trashButton.classList.add ("trash-btn")
todoDiv.appendChild(trashButton);
//append to the list
todoList.appendChild(todoDiv);
todoInput.value = ""
}

// delete functions
function delBtn(e) {
      const item = e.target;
      if(item.classList[0]==='trash-btn');
      const todo = item.parentElement;
      todo.remove();
}