// setInterval

// console.log("Script start");
// setTimeout(() => {
//     console.log(Math.random());
// }, 2000);
// console.log("Script End");


// console.log("Script start");
// setTimeout(() => {
//     let total = 0;
//     for(let i = 0; i < 1000000000; i++) {
//         total += i;
//     }
//     console.log(total);
//     console.log(Math.random());
// }, 500);
// console.log("Script End");


// const body = document.body;
// console.log(body);
// setInterval(() =>{
//     const red = Math.floor(Math.random() * 126);
//     const green = Math.floor(Math.random() * 126);
//     const blue = Math.floor(Math.random() * 126);
//     const rgb = `rgb(${red}, ${green}, ${blue})`;
//     body.style.background = rgb;
    // console.log(rgb);
// },1000);


const body = document.body;
// console.log(body);
const button = document.querySelector("button");
// console.log(button);
const intervalId = setInterval(() =>{
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;
    // console.log(rgb);
},1000);
button.addEventListener("click", () =>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
});
console.log(intervalId);