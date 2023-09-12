//Selector
let input = document.getElementById('newTask');
let addBtn = document.getElementById('addBtn');
let tasks = document.getElementById('tasks');

//Event Listeners

addBtn.addEventListener('click', addTask)
// trashBtn.addEventListener('click', removeItem)

//Functions

function addTask() {
    // create li
    let li = document.createElement('li');
    li.textContent = input.value;
    tasks.appendChild(li);
    //check mark buttton
    let completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class ="fas fa-check"></i>';
    li.appendChild(completeBtn);
    //trash Button
    let trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class= "fas fa-trash"></i>'
    li.appendChild(trashBtn)
    trashBtn.addEventListener('click', function () {
        removeItem(li);
    });
    input.value='';
}
function removeItem(liElement) {
    liElement.remove();
}

