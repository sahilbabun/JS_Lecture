// let numbers = [1,2,3];
// let numbers = new Array(1,2,3); --> This is how array work internally.Thats why we saw such methods.
// console.log(Array.prototype);
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

// JS mei array v object hote hai.
// JS mei by default har ek function ke sath ek property milti hai --> prototype.

function hello(){
    console.log("hello");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);