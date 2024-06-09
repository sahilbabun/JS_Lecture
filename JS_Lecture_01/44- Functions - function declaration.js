// Functions - function declarations

// Create a function
function singhappyBirthday(){
    console.log("Happy Birthday to you....");
} 

// function declaration
// function singhappyBirthday(){
//     console.log("Happy Birthday to you....");
// }

// Call the function or invoke or run the function - all are same.
singhappyBirthday();


// Add two numbers 2+4 by using the function
// function twoPlusFour(){
//     console.log(2+4);
// }
// twoPlusFour();


// like when you return a value, then
// function twoPlusFour(){
//     return 2+4;
// }
// const returnedValue = twoPlusFour();
// console.log(returnedValue);


// Add two numbers by using the function
// jo value pass karte hai usko "Argument" bolte hai aur function mei jo
// ... pass hota hai usko "parameter" bolte hai.
// function addTwoNumbers(number1, number2) {
//     return number1 + number2; // here function return a number.
// }
// const returnedValue = addTwoNumbers(4,5);
// console.log(returnedValue);

// Jab hum argument pass nahi karte hai to output "NaN" aata hai.
// function addTwoNumbers(number1, number2) {
//     return number1 + number2;
// }
// const returnedValue = addTwoNumbers();
// console.log(returnedValue); // output -> NaN
// console.log(undefined + undefined); // output -> NaN


// when you pass only two numbers and in parameters there are three parameters
// ... then the output will be "NaN".
// function addThreeNumbers(number1, number2, number3) {
//     return number1 + number2 + number3;
// }
// const returnedValue = addThreeNumbers(2,3);
// console.log(returnedValue); // output -> NaN
// console.log(2+3+undefined); // output -> NaN


// Create a function named isEven
// input: one number
// output: true -> when number is even, false -> when number is odd.

// Sol type-1
// function isEven(input) {
//     if(input % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(4));

//Sol type-2
// function isEven(input) {
//     if(input % 2 === 0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(4));

//Sol type-3
// function isEven(input) {
//     return input % 2 === 0;
// }
// console.log(isEven(10));


// Create a function
// input: string
// output: firstCharacter of string
// function firstchar(anyString){
//     return anyString[0];
// }
// console.log(firstchar("Sahil"));


// Create a function
// input: array, target any number.
// output: index of that target number if present in array if not then return -1.
function findTarget(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}
let myArray = [1,3,8,90];
let ans = findTarget(myArray, 8);
console.log(ans);
