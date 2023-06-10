const colors = ["red", "green", "Yellow"];;

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () =>{
    for (let i=0; i<colors.length; i++){
        const randomNumber = getRandomNumber()
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent=colors[randomNumber];
    }
})

const getRandomNumber =() => {
    return  Math.floor(Math.random()*colors.length);
};