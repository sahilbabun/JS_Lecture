// Parameter Destructuring

// PD mainly used with object and also in React framework.

const person = {
    firstName: 'John',
    gender: 'Male',
    age: 25,
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     // console.log(obj.age); // undefined - if there is no age in object.
// }

// Parameter Destructuring.
function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);