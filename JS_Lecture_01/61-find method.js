// find method

// find() method is used to retrieve the first element in an array that satisfies a specified condition.
// find() method executes a function for each array element until it finds one where the function returns a truthy value.
// find() method does not change the original array.
// find() method returns undefined if no elements are found.
// find() method does not execute the function for empty elements.
// Syntax: array.find(function(currentValue, index, arr),thisValue)

// const myArray = ["Hello", "cat", "dog", "Lion"];
// function isLength3(string){
//     return string.length === 3;
// };
// const ans = isLength3("dog");
// const ans = myArray.find(isLength3);
// const ans = myArray.find((string) => string.length === 3);
// console.log(ans);

const users = [
    {userId: 1, userName: "harshit"},
    {userId: 2, userName: "harsh"},
    {userId: 3, userName: "nitish"},
    {userId: 4, userName: "mohit"},
    {userId: 5, userName: "aaditya"},
];
const myUser = users.find((user) => user.userId === 3);
console.log(myUser);