// Arrow function

// function expression
// const singhappyBirthday = function(){
//     console.log("Happy Birthday to you....");
// }

// Arrow function
const singhappyBirthday = () => {
    console.log("Happy Birthday to you....");
}
singhappyBirthday();


// ----------------------------------------------------------------

// function expression
// const addThreeNumbers = function(number1, number2, number3) {
//     return number1 + number2 + number3;
// }
// const ans = addThreeNumbers(1, 2, 3);

// Arrow function
const addThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}
const ans = addThreeNumbers(1, 2, 3);
console.log(ans);

// ----------------------------------------------------------------

// function expression
// const isEven = function(input) {
//     return input % 2 === 0;
// }
// const answer = isEven(10);

// Arrow function
// const isEven = (input) => {
//     return input % 2 === 0;
// }
// const answer = isEven(10);
// console.log(answer);

// You can remove bracket when there is only one parameter in arrow function,
// const isEven = input => {
//     return input % 2 === 0;
// }
// const answer = isEven(10);
// console.log(answer);

// Other way to print the answer
const isEven = input =>  input % 2 === 0;
const answer = isEven(10);
console.log(answer);


// ----------------------------------------------------------------

// function expression
// const firstchar = function(anyString){
//     return anyString[0];
// }

// Arrow function
// const firstchar = (anyString) => {
//     return anyString[0];
// }
// console.log(firstchar("Sahil"));

// Other way to print the answer
const firstchar = anyString =>  anyString[0];

console.log(firstchar("Sahil"));



// ----------------------------------------------------------------

// function expression
// const findTarget = function(array, target){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] == target){
//             return i;
//         }
//     }
//     return -1;
// }

// Arrow function
const findTarget = (array, target) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}
let myArray = [1,3,8,90];
let tar = findTarget(myArray, 8);
console.log(tar);