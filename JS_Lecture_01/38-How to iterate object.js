// How to iterate object

const person = {
    name: "Sahil",
    age: 24,
    "person hobbies": ["Cricket","Sleeping","Eating Biryani"]
}

// There are two ways to iterate object
//... for in loop
//... Object.keys

// for in loop
// for(let key in person) {
//     console.log(person[key]);
// }

// if we want full key-value pairs then,simply we use "template literal"
// for(let key in person) {
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : ", person[key]);
// }


// Object.keys
// console.log(Object.keys(person));
// console.log(typeof Object.keys(person));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for of loop
for(let key of Object.keys(person)){
    console.log(person[key]);
}