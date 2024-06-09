// function expression
// ek variable mei function ko assign kr dete hai, usko function expression kehte hai.

// function singhappyBirthday(){
//     console.log("Happy Birthday to you....");
// }

// function expression
const singhappyBirthday = function(){
    console.log("Happy Birthday to you....");
}
singhappyBirthday();


// ---------------------------------------------------------------


// function addThreeNumbers(number1, number2, number3) {
//     return number1 + number2 + number3;
// }

const addThreeNumbers = function(number1, number2, number3) {
    return number1 + number2 + number3;
}
const ans = addThreeNumbers(1, 2, 3);
console.log(ans);


// ----------------------------------------------------------------


// function isEven(input) {
//     return input % 2 === 0;
// }

const isEven = function(input) {
    return input % 2 === 0;
}
const answer = isEven(10);
console.log(answer);

// ----------------------------------------------------------------


function firstchar(anyString){
    return anyString[0];
}
const firstchar = function(anyString){
    return anyString[0];
}


// ----------------------------------------------------------------



function findTarget(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}
