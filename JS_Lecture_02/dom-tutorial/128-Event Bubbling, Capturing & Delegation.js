// ctrl + shift + j ==> to open console for inspect in browser.

// Event Bubbling
// Event Capturing
// Event Delegation


// Event Bubbling / Propagation
// console.log("Hello world!");

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// child.addEventListener("click", () => {
//     console.log("You clicked on child");
// });
// parent.addEventListener("click", () => {
//     console.log("You clicked on parent");
// });
// grandparent.addEventListener("click", () => {
//     console.log("You clicked on grandparent");
// });
// document.body.addEventListener("click", () => {
//     console.log("You clicked on document.body");
// });


// Event Capturing
// passes boolean argument true at addEventListener.
/// capturing events
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// child.addEventListener("click", () => {
//     console.log("Capture !!! child");
// },true);
// parent.addEventListener("click", () => {
//     console.log("Capture !!! parent");
// },true);
// grandparent.addEventListener("click", () => {
//     console.log("Capture !!! grandparent");
// },true);
// document.body.addEventListener("click", () => {
//     console.log("Capture !!! document.body");
// },true);

/// no capture 

// child.addEventListener("click", () => {
//     console.log("Bubble child");
// });
// parent.addEventListener("click", () => {
//     console.log("Bubble parent");
// });
// grandparent.addEventListener("click", () => {
//     console.log("Bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//     console.log("Bubble document.body");
// });


// Event Delegation
const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click", (e) => {
    // console.log("you clicked something!!!");
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.textContent);
});