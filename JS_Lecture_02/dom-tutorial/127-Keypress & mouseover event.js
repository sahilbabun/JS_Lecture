// Keypress event
// mouseover event


// keypress event
// const body = document.body;
// body.addEventListener("keypress", (e) => {
    // console.log(e);
//     console.log(e.key);
// });


// mouseover event
const body = document.body;
const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
mainButton.addEventListener("mouseover", (e) => {
    // console.log(e);
    console.log("mouseover event ocurred!!");
});

// mouseleave event
mainButton.addEventListener("mouseleave", (e) => {
    // console.log(e);
    console.log("mouseleave event ocurred!!");
});

