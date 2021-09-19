const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', function(){
    const newList = document.createElement('li');
    const del = document.createElement('button')
    del.textContent = 'Remove';

    newList.innerHTML = input.value;
    input.value = '';
    list.appendChild(newList);
    newList.appendChild(del);

    // del.style.background ='pink'

del.addEventListener('click', function(){
    list.removeChild(newList);
});
});