// undefined
// null

// let firstName;
// console.log(typeof firstName);
// firstName = "Sahil";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "Sahil";
// console.log(typeof myVariable, myVariable);

console.log(typeof null); // object-> It is a reference data type.
//bug, error -> It is a bug in JavaScript or we can say an error.

// BigInt
// let myNumber = 123;
let myNumber = BigInt(123);
let sameMyNumber = 123n;
console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER); 
// MAX_SAFE_INTEGER -> It tells about how much number you can store in BigInt.
// BigInt is Primitive data type.
// There are two ways to denote a BigInt number :
// 1. BigInt(number) -> BigInt(12)
// 2. number(n) -> 12n
console.log(myNumber + sameMyNumber);