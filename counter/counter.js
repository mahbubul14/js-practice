const countNum = document.querySelector('.countNum')
const decBtn = document.querySelector('.decBtn')
const incBtn = document.querySelector('.incBtn')
const resBtn = document.querySelector('.resBtn')

let count = 0;

incBtn.addEventListener('click', () =>{

    count++
countNum.textContent = count;
})

decBtn.addEventListener('click', () =>{

    count--
countNum.textContent = count;
})

resBtn.addEventListener('click', () =>{

    count = 0
countNum.textContent = count;
})