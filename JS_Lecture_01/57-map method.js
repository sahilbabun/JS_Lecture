// map method
// -`map()` method is used to iterate over an array, applying 
// a callback function to each element. It then generates a new array 
// containing the results of applying the callback function to each element.

// - Map() takes callback as an input same as "forEach()" method.

// - It’s important to note that the `map()` method does not alter the 
// original array, preserving its integrity.

// - map() does not execute the function for empty elements.

// - Map() method kuch n kuch return karega.
// Syntax:- array.map(function(currentValue, index, arr), thisValue)

// const numbers = [3,4,6,1,8];
// const square = function(number){
//     return number * number;
// };

// const squareNumber = numbers.map(function(number){
//     return number * number;
// });

// const squareNumber = numbers.map((number, index)=>{
//     return `index: ${index}, ${number * number}`;
//     // return index; // - to store index in a new array.
// });
// console.log(squareNumber);

const users = [
    {firstName: "Mohd", age: 25},
    {firstName: "Sahil", age: 24},
    {firstName: "Babu", age: 23},
    {firstName: "Cherry", age: 22},
]
const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames);

