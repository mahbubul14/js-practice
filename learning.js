// let info = {
//     'name': 'Mahbub',
//     'age': "29"
// }
// ................................
// let students = {
//     name: "Mahbub",
//     age: 30,
//     hometown: 'Khulna'
// }

// let students_json = JSON.stringify(students)
// console.log(students_json);

// let json_to_obj = JSON.parse(students_json);
// console.log(json_to_obj);
// ..........................
// srintg,number,object, array, boolean, null
// let person = {
//     name: "Mahbub",
//     age: 30,
//     married: false,
//     dob: '1995-25-12',
//     test_null: null,
//     test_undefined: undefined,
//     greet: function () {
//         console.log(`Hello ${this.name}`)
//     }
// }

// var person_json = JSON.stringify(person)
// console.log(person_json)
// ........................warning............
// let info = {
//     'name': 'Mahbub',
//     'age': "29"
// }
// console.log(info);
// .................json objects and Array........



    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'data.json', true)

    xhr.onload = function() {
        let data = this.responseText;
        // console.log(data)
        jsonData(data);
        }
    xhr.send(); 

    function jsonData(json_obj) {
        // console.log(json_obj);
        let js_obj = JSON.parse(json_obj);
        // console.log(js_obj)
        for (x in js_obj.persons) {
            // console.log(x)
            var persons = js_obj.persons
            // console.log(persons[x]);
            for (y in persons[x]){
                console.log(y);
            }
        }
    }