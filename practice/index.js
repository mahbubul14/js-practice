const text = document.querySelector("h1");
const button = document.querySelector("button");
const p = document.createElement('p');
const ul = document.querySelector("ul");
const textInput = document.createElement("input");
const body = document.querySelector("body");

body.appendChild(textInput);
text.style.color = "red";
button.addEventListener('click',function(){
   const li = document.createElement("li");
   ul.appendChild(li);
   li.append(textInput.value);

console.log(li);
})