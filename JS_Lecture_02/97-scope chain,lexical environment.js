// lexical environment, scope chain

// const lName = "Babu";
// const printName = function(){
//     const fname = "Sahil";
//     console.log(fname);
//     console.log(lName);
// }
// printName();


const lName = "Babu";
const printName = function(){
    const fname = "Sahil";
    function myFunction(){
        console.log(fname);
        console.log(lName);
    }
    myFunction();
}
printName();