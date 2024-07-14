// this keyword inside eventListener callback

// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function(){
//     console.log("You clicked me!");
//     console.log("value of this");
//     console.log(this);
// });

// In case of arrow function, the value of this is window object.
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
    console.log("You clicked me!");
    console.log("value of this");
    console.log(this);
});
// value of this :- Window {window: Window, self: Window, document: document, name: '', location: Location, …}

