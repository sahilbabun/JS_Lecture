// important array methods

// forEach method
// map
// filter
// reduce


// forEach method - The forEach() method calls the provided function once for each element of the array.
// - The forEach() method does not return anything.
// Syntax: array.forEach(callback(element, index, arr), thisValue);


const numbers = [4,2,5,8];
// function multiplyBy2(number, index){
// function myFunc(number, index){
//     console.log(`index is ${index} and number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`);
// }
// multiplyBy2(numbers[0],0);
// multiplyBy2(numbers[1],1);
// multiplyBy2(numbers[2],2);
// multiplyBy2(numbers[3],3);
// for(let i = 0; i < numbers.length; i++){
//     myFunc(numbers[i], i);
// }
// numbers.forEach(myFunc);


// numbers.forEach(function(number, index){
//     console.log(`index is ${index} and number is ${number}`);
// });


// Ques: Use forEach method to print numbers multiply by 2.
// numbers.forEach(function(number){
//     console.log(`${number*2}`)
// });

const users = [
    {firstName: "Mohd", age: 25},
    {firstName: "Sahil", age: 24},
    {firstName: "Babu", age: 23},
    {firstName: "Cherry", age: 22},
]
// users.forEach(function(user){
//     console.log(user.firstName)
// });

users.forEach((user)=>{
    console.log(user.firstName)
});

// for(let user of users){
//     console.log(user.firstName)
// };


