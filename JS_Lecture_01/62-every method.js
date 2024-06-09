// every method

// every() method checks if all elements in an array pass a test specified by a function.
// It returns true if all elements satisfy the condition, otherwise false.
// every() method does not execute the function for empty elements.
// every() method does not change the original array.
// Syntax: array.every(function(currentValue, index, arr), thisValue)

// const numbers = [2,4,6,8,10];
// const numbers = [2,4,6,8,9,10];

// function isEven(number){
//     return number % 2 == 0;
// };

// const ans = numbers.every(isEven);

// const ans = numbers.every((number)=> number % 2 === 0);

// callback function ---> true / false (boolean)
// every method ---> true / false (boolean)

// console.log(ans);


const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 32000},
    {productId: 3, productName: "TV", price: 15000}
];
const ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans);