// closures
// closure :- 30-40%
// analyse :- 70-80%
// real example :- 100%


// function can return function


// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans);
// ans();



function printFullName(fName, lName){
    function printFunction(){
        console.log(fName, lName);
    }
    return printFunction;
}
const ans = printFullName("Sahil", "Babu");
// console.log(ans);
ans();

