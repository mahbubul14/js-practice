//Select UI element
const inputBox = document.querySelector('.input');
const text = document.querySelector('#text');
const btn = document.querySelector('#btn');

const storedInput = localStorage.getItem('textinput')

if (inputBox) {
    text.textContent = storedInput;
}


inputBox.addEventListener('input', letter => {
    text.textContent = letter.target.value;
})

const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent)
}

btn.addEventListener('click', saveToLocalStorage)
