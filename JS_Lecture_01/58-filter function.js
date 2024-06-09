// filter function.

// -filter() Method is used to create a new array from a given array
// consisting of only those elements from the given array that
//  satisfy a condition set by the argument method. 

// -The filter() method does not execute the function for empty elements.

// -The filter() method does not change the original array.

// -Jo filter() method ka callback function hoga wo hamesha return 
//  karega boolean value, ya true or false.

// Return value: It returns an array of elements that pass the test and 
//              an empty array if no elements pass the test. 

// Syntax: array.filter(callback(element, index, arr), thisValue)

// const numbers = [1,3,2,6,4,8];
// const isEven = function(number){
//     return number % 2 === 0;
// };
// const evenNumber = numbers.filter(isEven);
// console.log(evenNumber);


// const numbers = [1,3,2,6,4,8]; +6283839732766
// const isOdd = function(number){
//     return number % 2 !== 0;
// };
// const oddNumber = numbers.filter(isOdd);
// console.log(oddNumber);


const numbers = [1,3,2,6,4,8];
const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);
