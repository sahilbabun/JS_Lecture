// function execution context

let foo = "foo";
console.log(foo);
function getFullName(fName, lName){
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments.length);
    let myVar = "Var inside function";
    console.log(myVar);
    const fullName = fName + " " + lName;
    console.log(fullName);
}
const personName = getFullName("Sahil", "Babu");
console.log(personName);