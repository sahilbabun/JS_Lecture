// Intro to Events
// click


// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// console.dir(btn);
// btn.onclick = function(){
//     console.log("You clicked me!!!!");
// }

// method === addEventListener
// how to add events ?
const btn = document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("You clicked me!!!!");
// }
// btn.addEventListener("click", clickMe);

// OR

// btn.addEventListener("click", function(){
//     console.log("You clicked me!!!!");
// });

// OR by using arrow functions

btn.addEventListener("click", () => {
    console.log("You clicked me!!!!");
});

