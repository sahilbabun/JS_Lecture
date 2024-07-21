// callbacks, callback hell, pyramid of doom
// asynchronous programming

// Callbacks.

// for h1-heading 1
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
// }, 1000);


// for h2-heading 2, after h1
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "red";
//     }, 1000);
// }, 1000);


// callback hell.

// Example:- Do this.
// Text        Delay      Color

// one         1s         Violet
// two         1s         purple
// three       1s         red
// four        1s         pink
// five        1s         green
// six         1s         blue
// seven       1s         brown

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// for upper code,now using this function.
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
            // console.log("Your element does not exist");
        }
    }, time);
}
// changeText(heading1, "one", "violet", 2000, ()=>{
//     changeText(heading2, "two", "green", 1000);
// });
// changeText(heading1, "one", "green", 1000, ()=>{
//     console.log("hello world");
// }, ()=>{console.log("Heading1 does not exist")});

       
// pyramid of doom.

changeText(heading1, "one", "violet", 1000, ()=>{
    changeText(heading2, "two", "purple", 1000, ()=>{
        changeText(heading3, "three", "red", 1000, ()=>{
            changeText(heading4, "four", "pink", 1000, ()=>{
                changeText(heading5, "five", "green", 1000, ()=>{
                    changeText(heading6, "six", "blue", 1000, ()=>{
                        changeText(heading7, "seven", "brown", 1000, ()=>{
                            changeText(heading8, "eight", "cyan", 1000, ()=>{
                                changeText(heading9, "nine", "#cda562", 1000, ()=>{
                                    changeText(heading10, "ten", "dca652", 1000, ()=>{
                                    }, ()=>{console.log("Heading10 does not exist")});    
                                }, ()=>{console.log("Heading9 does not exist")});  
                            }, ()=>{console.log("Heading8 does not exist")});  
                        }, ()=>{console.log("Heading7 does not exist")});
                    }, ()=>{console.log("Heading6 does not exist")});
                }, ()=>{console.log("Heading5 does not exist")});
            }, ()=>{console.log("Heading4 does not exist")});
        }, ()=>{console.log("Heading3 does not exist")});
    }, ()=>{console.log("Heading2 does not exist")});
}, ()=>{console.log("Heading1 does not exist")});


