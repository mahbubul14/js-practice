//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//event listeners
todoButton.addEventListener("click", addTodo);
// completedButton.addEventListener('click', completeBtn);
todoList.addEventListener("click", deleteCheck);

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
//add todo to localstorage
saveLocalTodos(todoInput.value);

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
function deleteCheck(e) {
      const item = e.target;
      if(item.classList[0]==='trash-btn'){
      const todo = item.parentElement;
      todo.remove();
}

// check mark
if (item.classList[0]=== "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle('completed');

}
}

function saveLocalTodos (todo) {
      let todos;
      if(localStorage.getItem('todos') === null){
            todos = [];
      }else {
            todos = JSON.parse(localStorage.getItem('todos'))
      }
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
}