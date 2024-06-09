// what is prototype.
// A prototype is an object from which other objects inherit properties.
// Every JavaScript object has a prototype, which acts as a template 
// object that it inherits methods and properties from.

// Prototype Chain
// When you try to access a property or method on an object, JavaScript 
// will first look for that property or method on the object itself. 
// If it does not find it there, it will look for it on the object's 
// prototype, and then on the prototype's prototype, and so on, until 
// it reaches the end of the prototype chain. If the property or method 
// is not found anywhere in the chain, 'undefined' is returned.



function hello(){
    console.log("hello world");
};

// const hello = {key1: 'value1'}; // yaha hum check kr rhe hai ke hello naam ke object ke paas prototype hai yaa nhi,yaha nahi hai.


// JavaScript function combo hai ===> function + object.

// If we want to know function name, then there is a property named "name".
console.log(hello.name); // hello

// You can add your own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty); // here we see that we treat "hello" function as an object.

//name property --> tells function name.

// function hame ek free space dega, ye free space ek empty object hai, aur
// uss object ko bolte hai, prototype.

console.log(hello.prototype); // {}
// only functions provide prototype properties.
// function ke alawa aur koi v prototype provide nahi karta.
// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

// we can add own multiple key value pairs to the prototype
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalllaalaa";
};
console.log(hello.prototype); // Object { abc: "abc", xyz: "xyz", … }
console.log(hello.prototype.sing()); // 
