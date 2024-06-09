// intro to arrays
// Arrays are reference data types.
// Arrays are ordered collections of items or elements.
// Arrays are mutable.
// All reference data types are object.
// Arrays are object.


// how to create arrays

// let fruits = ["apple", "mango", "Grapes"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let mixed = [1,2,8.49,"Sahil",null,undefined];
// console.log(mixed);

// let numbers = [1,2,8.49,6];
// console.log(numbers);

// let fruits = ["apple", "mango", "Grapes"];
// console.log(fruits);
// fruits[1] = "Banana";
// console.log(fruits);
let fruits = ["apple", "mango", "Grapes"];
let obj = {}; // object literal.
// How to know that the above line is array or not (line no.-27)?
// Ans - To know that the above line is array or not just by using "isArray" function.

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));
console.log(typeof fruits);
console.log(typeof obj);


// array indexing
