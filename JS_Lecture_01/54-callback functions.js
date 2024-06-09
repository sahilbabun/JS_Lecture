// callback functions
// aapne koi bhi function as a input liya aur usko call kr diya, usko callback function bolte hai.


function myFunc2(name){
    console.log("Indian Premier League");
    console.log(`My name is ${name}`);
}
function myFunc(callback) {
    console.log("Hello there here u r");
    callback("Sahil");
}
myFunc(myFunc2);

