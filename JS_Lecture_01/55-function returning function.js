// function returning function - higher order function.

// function myFunc(){
//     return {name: "Sahil", age: 25};
// }
// const ans = myFunc();
// console.log(ans);


function myFunc(){
    function hello(){
        // console.log("Hello world");
        return "Hello world";
    }
    return hello;
}
const ans = myFunc();
// ans();
console.log(ans());