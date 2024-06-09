// for loop in array.

let fruits = ["apple", "orange", "grapes", "banana"];

// //for(let i = 0; i <= 9; i++) {
//     console.log(i);
// }

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits[fruits.length - 2]);
// console.log(fruits[fruits.length - 3]);

// for(let i = 0; i < fruits.length; i++) {
//     // console.log(fruits[i]);
//     console.log(fruits[i].toUpperCase());
// }

// Make a new array and put all the items of fruits into fruits2 array in Uppercase.
let fruits2 = [];
for(let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
