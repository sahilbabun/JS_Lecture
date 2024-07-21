// understand callbacks

// way-1
// function myFunc(){
//     console.log("Function is doing task 1");
// };
// function myFunc2(){
//     console.log("Function is doing task 2");
// };
// myFunc();
// myFunc2();

// way-2
// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// };
// function myFunc2(){
//     console.log("Function is doing task 2");
// };
// myFunc(myFunc2);

//way-3
// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// };
// myFunc(function(){
//     console.log("Function is doing task 2");
// });

//way-4
// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// };
// myFunc(() => {
//     console.log("Function is doing task 2");
// });

// function getTwoNumbersAndAdd(number1, number2, callback){
//     console.log(number1, number2);
//     callback(number1, number2);
// };
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// };
// getTwoNumbersAndAdd(4, 5, addTwoNumbers);


// function getTwoNumbersAndAdd(number1, number2, callback){
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         callback(number1, number2);
//     } else {
//         console.log("Wrong Data Type");
//     }
// };
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// };
// getTwoNumbersAndAdd("4", "5", addTwoNumbers);
// output :- Wrong Data Type.


// function getTwoNumbersAndAdd(number1, number2, callback){
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         callback(number1, number2);
//     } else {
//         console.log("Wrong Data Type");
//     }
// };
// getTwoNumbersAndAdd(4, 5, (num1,num2) => {
//     console.log(num1 + num2);
// });
// output :- 9


function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1, number2);
    } else {
        onFailure();
    }
};
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
function onFail(){
    console.log("Wrong data type");
    console.log("please pass numbers only");
}
getTwoNumbersAndAdd(4,5,addTwoNumbers, onFail);

