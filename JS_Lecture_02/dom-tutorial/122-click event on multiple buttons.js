// click event on multiple buttons

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log("You clicked me!");
// });

// const allButtons = document.querySelectorAll("button");
// console.log(allButtons);

// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

// const allButtons = document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click", function(){
        // console.log("You clicked me!");
        // console.log(this);
//         console.dir(this);
//     });
// }


// now print the text content of the button
const allButtons = document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     });
// }

// for(let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     });
// }

allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    });
});

// if we use arrow function on above code, then it shows undefined
// const allButtons = document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click", ()=>{
//         console.log(this.textContent);
//     });
// }


