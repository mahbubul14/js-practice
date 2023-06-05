//Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        city: "khulna",
        zipcode: 1942
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

console.log(person.address.city);
console.log(person['firstName']);
console.log(person.getBirthYear());
