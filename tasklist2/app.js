//Define UI element
let input = document.getElementById('input');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList')
let clearBtn = document.getElementById('clearBtn')

//Define eventlistener
addBtn.addEventListener('click', addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTask);
document.addEventListener('DOMContentLoaded',getTasks);
//Define functions
    // Add task
function addTask(e){
    if(input.value === ''){
        alert('Add a task please')
    }else {
        let li = document.createElement('li');
        li.innerText = input.value;
        taskList.appendChild(li)
        
        let link = document.createElement('a')
        link.setAttribute('href', '#')
        link.innerHTML = ' X';
        li.appendChild(link);

        storeInLocalStorage(input.value);
        input.value = ''
    }
}

function removeTask(e){
    if (e.target.hasAttribute('href')){
        let ele = e.target.parentElement;
        ele.remove();
          
    }
}

function clearTask(e) {
    // taskList.innerHTML ="";

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}
// store in local storage
function storeInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks = [];
    }else {
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks = [];
    }else {
        tasks=JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.innerText = task;
        taskList.appendChild(li)
        
        let link = document.createElement('a')
        link.setAttribute('href', '#')
        link.innerHTML = ' X';
        li.appendChild(link);
    });
}