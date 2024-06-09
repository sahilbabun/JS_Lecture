// Block scope vs function scope

// let and const are block scope
// Agar kisi block mei "let" and "const" use karke variable banaya hai, aap "let" and "const" ke uss 
//... variables ko ussi block mei access kar sakte hai, uss block ke baahar access nahi kar sakte.
// {
//     const firstName = "Sahil";
//     console.log(firstName);
// }
// console.log(firstName);

// {
//     const firstName = "Babu";
//     console.log(firstName);
// }
// Above both block work differently.

// const firstName = "JavaScript";
// console.log(firstName);

// if(true){
//     var firstName = "JavaScript";
//     // console.log(firstName);
// }
// console.log(firstName);



// var is function scope
// var ko hum kahi se v access kar sakte hai.
// {
//     var firstName = "JavaScript";
// }
// console.log(firstName);

function myApp() {
    if(true){
        var firstName = "Sahil";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();