// Event Object

const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log(this);
// });

// firstButton.addEventListener("click", function(event){
//     console.log(event);
// });

// jab bhi mei kisi bhi element pe event listener add hoga
// js engine --- line by line execute karta hai
// browser --- js engine + extra features
// browser --- js engine + WebApi

// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rhe hai
// browser --- 2
// 1.) callback function hai vo js engine ko degi ke execute karo .....
// 2.) callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mei milegi 


const allButtons = document.querySelectorAll(".my-buttons button");
for(let button of allButtons){
    button.addEventListener("click", (e)=>{
        // console.log(e);
        // console.log(e.target);
        console.log(e.currentTarget);
    });
}
// target --> ks element ne event ko triggered kiya.
// currentTarget --> ks element pe humne eventListener attached kiya tha.

