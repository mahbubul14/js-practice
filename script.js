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
        `;
        lists.appendChild(listItem);
    
        const removebtn =  document.createElement('button')
        listItem.appendChild(removebtn);
        removebtn.style.padding = "10px 10px 5px 10px";

        task_input.value ='';
        lists.style.listStyle = `none`;
    } else {
        alert('Please enter a task')
    }
}

task_input.addEventListener('keypress',(event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

submit.addEventListener('click',(event) => {
        addTask();
});
