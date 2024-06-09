// Maps.
// map is an iterable

// stored data in ordered fashion

// store key-value pairs (like objects)

// const person = new Map();
// // add element
// // aap Map mei kisi v type ki value rakh sakte hai - main diff. b/w object & map
// person.set(1,'one'); // here 1 is a number not a string.
// person.set('firstName', 'Sahil');
// person.set('age', 24);
// person.set([1,2,3,4,5], 'onetwothree');
// person.set({1: 'one'}, 'onetwothree');
// console.log(person);
// console.log(person.firstName); // output - undefined.

// How to access values or key-value pairs in Map ?
// By using get() method.
// console.log(person.get('firstName')); 
// console.log(person.get('age')); 
// console.log(person.get(1)); 

// How to access all keys ?
// By using keys() method.
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key, typeof key);
// };



// for(let [key, value] of person){
//     console.log(key, value);
// };



// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key like array,string,number

// objects literal
// key always in --> string or symbol
// const person = {
//     firstName : "Sahil",
//     age : 24,
//     1: "one"
// };
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// console.log(person[1])
// for(let key in person){
//     // console.log(person[key]);
//     console.log(typeof key);
// }



// const person = new Map([['firstName', 'Sahil'],['age', 24]]);
// console.log(person);

// const person1 = {
//     id: 1,
//     firstName: "sahil"
// };

// const person2 = {
//     id: 2,
//     firstName: "Supriya"
// };

// const extraInfo = new Map();
// extraInfo.set(person1, {age: 24, gender: "male"});
// extraInfo.set(person2, {age: 23, gender: "female"});
// // console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(person2.id);
// console.log(extraInfo.get(person2).gender);

// other 
// for(var index = 0;index < 5;index++){
//     setTimeout(()=>{
//         console.log(index)
//     }, index);
// };

