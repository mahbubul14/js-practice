const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

input.addEventListener('input', (letter) => {
    list.textContent = letter.target.value
});

const saveStorage = () => {
    localStorage.setItem('info', list.textContent);
}

btn.addEventListener('click', saveStorage);


    // const item = document.createElement('p');
    // item.innerHTML = input.value;
    // input.value = '';
    // list.appendChild(item);


