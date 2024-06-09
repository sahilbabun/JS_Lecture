// reduce method.

// -reduce() method is used to reduce the array to a single value and 
// executes a provided function for each value of the array (from left to 
// right) and the return value of the function  is stored in an accumulator. 

// Syntax: 
// array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

// callbackFn:
// -A function to execute for each element in the array. Its return value 
// becomes the value of the accumulator parameter on the next invocation 
// of callbackFn. For the last invocation, the return value becomes the 
// return value of reduce(). The function is called with the following arguments:

// accumulator:
// -The value resulting from the previous call to callbackFn. On the first
// call, its value is initialValue if the latter is specified; otherwise 
// its value is array[0].

// currentValue:
// -The value of the current element. On the first call, its value is 
// array[0] if initialValue is specified; otherwise its value is array[1].

// currentIndex:
// -The index position of currentValue in the array. On the first call, 
// its value is 0 if initialValue is specified, otherwise 1.

// initialValue:
//->A value to which accumulator is initialized the first time the callback
// is called. If initialValue is specified, callbackFn starts executing 
// with the first value in the array as currentValue. If initialValue is 
// not specified, accumulator is initialized to the first value in the 
// array, and callbackFn starts executing with the second value in the 
// array as currentValue. In this case, if the array is empty (so that 
// there's no first value to return as accumulator), an error is thrown.


// aim: sum of all the numbers in array.
// const numbers = [1,2,3,4,5,10];
// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// });

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100); // here I put a initialValue and now 100 act as accumulator and currentValue is 1.
// console.log(sum);

// accumulator          currentValue          return
//     1                     2                  3
//     3                     3                  6
//     6                     4                  10
//    10                     5                  15
//    15                    10                  25


const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 22000},
    {productId: 3, productName: "TV", price: 15000}
];
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);

// totalPrice         currentValue         return
//    0                  1st {}              12000
//   12000              22000                34000
//   34000              15000                49000


