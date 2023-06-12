const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@gmail.com",
    //object in object
    address: {
        city: "Khulna",
        zipcode: 9242
    },
    // function in object
    getBirthYear: function (){
        return 1993 - this.age;
    }
}

let value;
value = person;
// specific value
value = person.firstName;
value = person['firstName'];
value = person.address.city;
value = person.address.zipcode; 
value = person.getBirthYear();
//Output
console.log(value);

const people = [{
    name: "Sara",
    age: 32
    },
    {
        name: "Sam",
        age: 21
        }
];
// loop
for (let i = 0; i<people.length; i++){
    console.log(people[i].name)
}










