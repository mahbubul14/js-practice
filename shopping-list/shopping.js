const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', function(){
    const item = document.createElement('li');
    // let del = document.createElement('button');
    // del.setAttribute ('id', "removeBtn");
    // del.id = 'removeBtn';
    // del.textContent = 'Remove';
    const value = input.value;
    item.innerHTML = value;
    input.value = '';

    // list.appendChild(item);
    // item.appendChild(del);

// del.addEventListener('click', function(){
//     list.removeChild(item);
// });
});


