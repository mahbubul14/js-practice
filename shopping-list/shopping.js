
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const list = document.getElementById('list')

const saveStorage = () => {
    localStorage.setItem('info', input.value)
}

const stored = localStorage.getItem('info')

btn.addEventListener ('click', saveStorage);

if(stored) {
    list.textContent = stored;
}