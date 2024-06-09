// some method

// some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument method.
// The some() method does not change the original array.
// some() method does not execute the function for empty array elements.

// const numbers = [3,5,6,9];

// kya ek bhi number esa hai jo even hai
// toh true dega.

// const ans = numbers.some((number) => number % 2 === 0);
// console.log(ans);

const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 22000},
    {productId: 3, productName: "TV", price: 35000},
    {productId: 3, productName: "macbook", price: 250000},
];
const ans = userCart.some((cartItem) => cartItem.price > 100000);
console.log(ans);
