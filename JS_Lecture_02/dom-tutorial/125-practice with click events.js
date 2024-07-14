// little practice with click events

// mere pass buttons hai aur mei buttons pd click karu to background yellow ho jana chahiye button box ka color grey ho jana chahiye?
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons.length);
allButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    });
});
