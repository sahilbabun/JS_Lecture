// Hoisting
// Hoisting is the default behavior in JavaScript where declarations of variables and functions are moved to the
//... top of their respective scopes during the compilation phase. This ensures that regardless of where variables
//... and functions are declared within a scope, they are accessible throughout that scope.

// It compile before we declare the function after call.
// This happens only in case of simple function not in function expression and arrow function.
// If you try this in case of function expression and arrow function then it shows referenceError.
// ... ReferenceError is thrown when trying to access a previously undeclared variable.

// hello();
// function hello(){
//     console.log("Hello world");
// } // This called hoisting.

// In Hoisting, when you try to access a variable using a "var" then it shows undefined,
//... but when you try to access a variable using a "let" and "const", then it shows ReferenceError.

// In case of "var" -
// console.log(hello); // output: undefined.
// var hello  = ("Hello world!");

// In case of "let" -
// console.log(hello); // output: ReferenceError
// let hello  = ("Hello world!");

// In case of "const" -
console.log(hello); // output: ReferenceError.
const hello  = ("Hello world!");
