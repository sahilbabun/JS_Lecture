// this keyword.

// this keyword refers to the current context or scope within which code 
// is executing. Its value is determined by how a function is called, and 
// it can dynamically change depending on the invocation context.

// The this keyword refers to different objects depending upon how it is used:

// -- When used within a method of an object, this points to that object.
// -- When used by itself, this points to the global object.
// -- Within a function, this typically points to the global object.
// -- In a function under strict mode, this becomes undefined.
// -- During an event, this points to the element that triggered the event.
// -- Methods such as call(), apply(), and bind() can reassign this to any desired object.

// NOTE - this is not a variable. It is a keyword. You cannot change the value of this.

// JavaScript ka global object hota hai window object.
// console.log(window);
// console.log(this);

// this === window  --> true.

// function myFunc(){
//     console.log(this);
// }; // window object aayega.

// window.myFunc();


// when we use strict mode it shows undefined behavior, otherwise it shows window object.
function myFunc(){
    "use strict";
    console.log(this);
}; 

// window.myFunc();
myFunc();
