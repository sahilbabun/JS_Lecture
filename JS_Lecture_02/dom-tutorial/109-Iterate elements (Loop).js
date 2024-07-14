// Loop

// array like object ---> indexing, length property

// const navItems = document.getElementsByClassName("nav-item");    // HTMLCollection
// const navItems = document.getElementsByTagName("a");   // HTMLCollection
// let navItems = document.getElementsByTagName("a");   // HTMLCollection
// console.log(navItems);
// console.log(navItems.length);

// we can't use forEach method to iterate through HTMLCollection.
// we can use these type of loops to iterate.
// simple for loop
// for of loop
// forEach 


// for loop
// for(let i = 0; i < navItems.length; i++) {
//     // console.log(navItems[i]); 
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for of loop
// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// forEach loop
// navItems.forEach((navItem) =>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// give this error:- Uncaught TypeError: navItems.forEach is not a function.


// To change HTMLCollection into Array:
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem) =>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// now it change and gives output as : true.


// querySelector finds in NodeList.
let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));
// console.log(navItems);
// we can use these type of loops to iterate in NodeList:
// simple for loop
// for of loop
// forEach 

//for of loop
// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// for of loop
// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// forEach loop
// navItems.forEach((navItem) =>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })