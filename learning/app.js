//................. 4  ways to see output
// window.alert("I am learning JS");
// document.write("I am learning JS")
// innerHTML
// console.log
// .................how to get user info
// var x;
// x = prompt("Enter your name: ");
// console.log(x);
// document.write(x);

// ..........variable declaration
// var a = 10;
// var b = a;
// console.log(a);
// console.log(b);

// let a = 5;
// a++;
// let b = 5;
// ++b;
// console.log(a);
// console.log(b);

// exercise..........................
// let input = prompt("Please enter a temperature:");
// let Fahrenheit = (9/5*input) +32;
// alert("Fahrenheit: " + Fahrenheit + " Degree");
// console.log("Task Complete")
// let a = {};
// console.log(a.name);

// var age = prompt();
// if (age<=25) {
//     console.log("Under age")
// } else {
//     console.log("Over age")
// }

// let n1 = prompt("First Number: ");
// let n2 = prompt("Second Number: ")
// let n3 = prompt("Third Number: ")

// if (n1 >= n2 && n1 >= n3) {
//     console.log(n1+ " is the largest number")
// }else if (n2>= n1 && n2>=n3) {
//     console.log(n2 + " is the largest number")
// } else {
//     console.log(n3 + " is the largest number.")
// }

// let number = prompt("What is your Number?");
// let grade;

// if (number <=100 && number >=80) {
//     grade = "A+"
// }
// console.log("Your grade: "+grade);
// var i = 1;
// while(i<=5) {
//     console.log(i);
//     i++
// }
// for(let i =1; i<=10; i++) {
//     if (i%2 ==1){
//         continue;
//     }
//     console.log(i)
// }

// let name = "hello world!"

// for (let i = 0; i<=name.length; i++) {
//     console.log(`index: ${i}`)
//     console.log(name[i])
// }

// var n = prompt("Enter the number of terms: ");
// var sum = 0;
// var series = "";

// for (let i=1; i<=n; i++){
//     sum += i**2;
//     series +=(i**2).toString()+ " ";
//     // console.log(i*i);
// }
// console.log(series)
// function......................

// saySomething =() => {
//     console.log('hello')
// }
// saySomething();

// var foods = ["cake", "Ice-cream", "Chocolates"];
// var numbers = [1,32,45];

// addSomething = (item) => {
//     return `${item} is a food`;
// }
// let arr_res = foods.map(addSomething);
// console.log(arr_res);

// let person = {
//     firstname: 'maha',
//     lastname: "Alam",

//     fullname: function() {
//         return `${this.firstname} ${this.lastname}`;
// }

// }
// console.log(person.fullname());


// let person1 ={
//     firstname: 'maha',
//     lastname: 'Alam',
//     dob: "20-05-95",
//     fullname: function () {
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// let person2 ={
//     firstname: 'mahbub',
//     lastname: 'tumpa',
//     dob: "30-05-95",
//     fullname: function () {
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// // person1.fullname();
// console.log(person1);
// console.log(person2);

// class Person {
//     constructor(fname, lname, birthday){
//         this.firstname = fname;
//         this.lastname = lname
//         this.dob = birthday;
//     }
// }
// let person1 = new Person("Maha", "Alam", "11-11-11");
// let person2 = new Person("Imran", "howladar", "20-05-95");


// console.log(person1)
// console.log(person2)

// ..................DOM............
// let list = document.querySelector('ul');
// let val;
// val = list.childNodes
// val = list.children[0].textContent = "hello"
// console.log(val);

// let btn = document.querySelector('button');



//  let message = () => {
//     console.log('ha hello world');
// }
// btn.addEventListener('click', message);

// ............error handling............
// console.log("Befor Error!")


// try {
//     // test();
// }catch (err){
//     console.log(err.name);
//     console.log(err.message);
// } finally {
//     console.log('there is no error')
// }

// console.log("after Error!")

// regular expression.............................

// let re;
// let str;
// re = /hello/;
// re = /hello/i; // i= case insensitive
// console.log(re);
// console.log(re.source);
// // exec() - return result in an array or null
// str = "again Hello world";
// let result = re.exec(str);

// //test  - true/false
// result = re.test(str);

// // match() = return array or null

// result = str.match(re)
// // serch() - return index of the first match or -1
// result = str.search(re);
// // replace() - return new string
// str = "again hello world";
// let newstr = str.replace(re, "hi");
// console.log(newstr);


// let re;
// let str;
// // Literal character......
// re = /hello/;
// re = /hello/i;
// // meta characters.......
// re =/^/ //must starts with
// re =/$/; //must ends with
// re = /^h.llo$/ //match any character

// re = /^hello/;
// re = /hello$/;
// re = /^hello$/;
// re = /^h*llo$/; //o or more times
// re = /^he?l?lo$/; //optional
// str =/hello\?/ // escaping/

// // character set using brackets...............

// re = /h[ea]llo/;// must ;be one of them insid3e brackets
// str = "hllo"

// console.log(re.exec(str));
// reTest(re,str);
// function reTest(re,str) {
//     if(re.test(str)){
//         console.log(`'${str}' matches '${re.source}'`)
//     } else {
//         console.log(`'${str}' doesn't matches '${re.source}'`)
//     }
// }
// ..............json..........
// var student = {
//     name: "maha",
//     age: 30
// }

// let student_json = JSON.stringify(student);
// console.log(student_json);
// var student_new = JSON.parse(student_json);
// console.log(student_new);

// ....Json data types
// var person = {
//     name: "maha",
//     age: 30,
//     marries: true,
//     dob: 1995-5-12,
//     greet: function (){
//         console.log(`hello ${this.name}`)
//     }
// }

// // person.greet(); 
// var person_json = JSON.stringify(person);
// console.log(person_json)

// ........Json object and array......



// ajax intro..............
// document.getElementById('get_data').addEventListener('click',loadData);
// function loadData(){
//     //create xhr object(xml http request)
//     let xhr = new XMLHttpRequest();

//     //open function
//     xhr.open('GET', 'data.txt', true);

//     xhr.onload = function() {
//         if (this.status === 200){
//            document.getElementById('output').innerHTML= `<h4>${this.response}</h4>`
//         }
//     }
//     xhr.send();
//     // console.log(xhr)
// }
// ..............Arrow function................

// function hello() {
//     console.log("hello world");
// }
// hello();

// let hello = (name, age) => {
//     console.log(`Welcome ${name} + "Your age is: ${age}"`);
// }
// hello("maha", 28);

// numbers = [1,2,3,4,5,6];

// // let printAll = (item) =>{
// //     console.log(item);
// // }
// numbers.forEach((item)=> console.log(item));

// let squareAll=(item)=>{return item*item}
// let squareNum = numbers.map(squareAll);
// console.log(squareNum);
// .........template literals..........
// console.log(`first line
// second line`);
// ........promises.......

//promises

//successful >resolve

//failed > reject

let prom = new Promise((resolve, reject) => {
    let a = 1+1

    if (a==3) {
        resolve('sucess');
    }else {
        reject('failed');
    }
})
// .then .catch
prom.then((message) => {
    console.log('I am from then '+ message);
}).catch ((message)=>{
    console.log("I am from catch " + message)
});