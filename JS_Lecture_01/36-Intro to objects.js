// objects
// objects are reference type.
// arrays are good but not sufficient for real world data.
// objects store key value pairs
// objects don't have index.

// how to create objects

// const person = {name: "Sahil" , age: 22}; // This also called object literal.
const person = {
    name: "Sahil",
    age: 24,
    hobbies: ["Cricket","Sleeping","Eating Biryani"]
}
console.log(person);


// how to access data from objects
// console.log(person.name);  // retrieve value using dot notation.
// console.log(person["name"]); // retrieve value using bracket notation.
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pairs to objects
// person.gender = "male";
person["gender"] = "male";
console.log(person);