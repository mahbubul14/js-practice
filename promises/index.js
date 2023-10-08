let persons = [
    {fristName: "Maha", lastName: "Alam"},
    {fristName:"Moin", lastName: "khan"}
]

function cratePerson(person) {
    let prom = new Promise(function(resolve, reject){
        persons.push(person);
        resolve();
    });
    return prom;
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
cratePerson({fristName:"rony", lastName:"chy"})
    .then(getPerson);

