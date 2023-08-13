// var -- functioned scopped

// var nam = 'Maha';
// console.log(nam);

// // let -- global scopped
// let age = "28";
// console.log(age);

// examples...
// let input = prompt("what is your name?");
// alert("hello " + input);

// let address;
// address = "Dhaka";
// console.log(address);

// const city = "khulna"
// console.log(city);

// const num = [40, 30 , 20];
// console.log(num);
// .........Javascript daty types............

// primitives data types

// Boolean
// Number
// String
// null
// Symbol
// undefined

// complex data types

//object
// let obj = {
//     name: 'maha',
//     age: 28
// }
// let arr = ['dhaka', 'khulna'];
// console.log(typeof obj);
// console.log(typeof arr)

//..............Data Conversion...............
// let example;
// example = String(555);
// example =  String([1,2,3])
// example = Number("555")

// console.log(typeof example)
// console.log(example.length)

// example = (555).toString();
// .................JS math.............
// let value;
// let num1 = 12;
// let num2 = 5;
// value = num1 + num2;
// value = num1 - num2
// value = num1 * num2;
// value = num1 / num2;
// value = num1 % num2;

// value = Math.random()*100;
// value = Math.floor(value)
// console.log(value);
// .........love calulator project...
// let myName = prompt("what is your name?");
// let partnerName = prompt ("What is your partner's name?")
// let number = Math.random()*100;
// number = Math.floor(number)+1;

// showing result
// alert(myName + " and " + partnerName +"'s love percentage is:" + number + " %")
// console.log(myName);
// console.log(partnerName);
// let str1 = "First course of this channel is about javascript"

// console.log(str1.charAt(0));
// console.log(str1.charCodeAt(0));

const nam = `maha`;
const age = 28;
const city = 'Khulna'

let html;
html = `
    <ul>
        <li>name: ${nam} </li>
        <li>age: ${age}</li>
        <li>city: ${city}</li>
    </ul>
`
document.body.innerHTML = html;