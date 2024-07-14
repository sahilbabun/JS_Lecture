// Hoisting 

console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);

function myFunction() {
    console.log("This is my function");
};

var fName = "Sahil";
var lname = "Babu";
var fullName = fName + " " + lname;
console.log(fullName);