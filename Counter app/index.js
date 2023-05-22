const btnInc = document.querySelector(".inc");
const btnDec = document.querySelector(".dec");
const btnRes = document.querySelector(".res");
const show = document.querySelector(".display");

let count = 0;

btnInc.addEventListener('click', () => {
    count++;
    show.innerText = count;
});


btnDec.addEventListener('click', () => {
    count--;
    show.innerText = count;
});


btnRes.addEventListener('click', () => {
    count = 0;
    show.innerText = count;
});
