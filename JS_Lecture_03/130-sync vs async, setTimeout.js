// synchronous programming vs asynchronous programming


// synchronous programming 
// it is synchronous and single threaded.

// console.log("Script Start");

// for(let i = 0; i < 10000; i++){
//     console.log("inside for loop");
// };

// console.log("Script End");


// asynchronous programming
// setTimeout
// ye do parameter lega, 1st parameter ek function lega aur 2nd parameter kitni der baar ye function call krna hai.
// setTimeout hame rtrn mei ek id deta hai.
// 1000 = 1000 milliseconds == 1 second (delay time).

// console.log("script start");
// function hello(){
//     console.log("hello world!!");
// };
// setTimeout(hello, 1000);
// console.log("script end");


// console.log("script start");

// setTimeout(() => {
//     console.log("inside setTimeout");
// }, 1000);

// for(let i = 0; i < 100; i++) {
//     console.log("....");
// };
// console.log("script end");

console.log("script start");

const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 1000);

for(let i = 0; i < 100; i++) {
    console.log("....");
};
console.log("setTimeout id is: ", id);
// console.log("clearing time out");
// clearTimeout(id);
console.log("script end");
