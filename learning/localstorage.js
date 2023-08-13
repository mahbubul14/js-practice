// const json = JSON.stringify({x:5, y: 6});
// console.log(json);
// console.log(JSON.parse(json));
// var data = {name: 'maha', role: 'Developer'};

// var store = JSON.stringify(data);

// localStorage.setItem('data', store);
// console.log(localStorage.getItem('data'));

let key = prompt("enter key you want to set")
let value = prompt("enter value you want to set")


localStorage.setItem(key, value);

console.log(`the value ${key} is ${localStorage.getItem(key)}`)
// if (key = 0) {
// localStorage.clear()};