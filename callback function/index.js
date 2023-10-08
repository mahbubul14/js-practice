// setTimeout(function(){
//     console.log('Hello world!')
// }, 1000)

// let persons = [
//     {fristName: "Maha", lastName: "Alam"},
//     {fristName:"Moin", lastName: "khan"}
// ]

// function cratePerson(person) {
//     setTimeout(function(){
//         persons.push(person);
//     },4000)
// }

// function getPerson(){
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output+=`<li>${person.fristName} ${person.lastName}</li>`
//         });
//         document.getElementById('output').innerHTML = output;
//     },1000)
// }


let persons = [
    {fristName: "Maha", lastName: "Alam"},
    {fristName:"Moin", lastName: "khan"}
]

function cratePerson(person,callback) {
    setTimeout(function(){
        persons.push(person);
        callback();  
    },2000)
}

function getPerson(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output+=`<li>${person.fristName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML = output;
    },500)
}
cratePerson({fristName:"rony", lastName:"chy"}, getPerson);