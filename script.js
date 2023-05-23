const task_input =  document.getElementById("task_input");
const submit = document.querySelector(".submit-btn")
const lists = document.getElementById("lists")
submit.style.color = "red"

submit.addEventListener('click',() => {
    const task_text = task_input.value;
    if (task_text != '') {
        const  listItem = document.createElement('li')
        listItem.innerHTML = `
        <input type = "checkbox">
        <label>${task_text}</label>
        `;
        lists.appendChild(listItem);

        task_input.value ='';
    }
    lists.style.listStyle = `none`;
    console.log(lists)
});