const task_input =  document.getElementById("task_input");
const submit = document.querySelector(".submit-btn")
const lists = document.getElementById("lists")
submit.style.color = "red"

const addTask = () => {
        const  task_text = task_input.value.trim();
    
    if (task_text != '') {
        const  listItem = document.createElement('li')
        listItem.innerHTML = `
        <input type = "checkbox">
        <label>${task_text}</label>
        <button class="remove-btn">Remove</button>
        `;
        lists.appendChild(listItem);

        task_input.value ='';
        lists.style.listStyle = `none`;
    } else {
        alert('Please enter a task')
    }
}

const removeTask = (event) => {
    const listItem = event.target.parentNode;
    lists.removeChild(listItem);
  };
// const editTask = () {
//     const 
// }

task_input.addEventListener('keypress',(event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

submit.addEventListener('click',() => {
        addTask();
});

lists.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
      removeTask(event);
    }
  });
