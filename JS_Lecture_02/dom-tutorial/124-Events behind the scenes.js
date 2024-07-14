// Events behind the scenes

console.log("script start !!!");
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i = 0; i <= 1000000000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    });
});
console.log("script end !!!!!");

let outerVar = 0;
for(let i = 0; i <= 100000000; i++){
    outerVar += i;
}
console.log("value of outer variable is ", + outerVar);
console.log("script end !!!");