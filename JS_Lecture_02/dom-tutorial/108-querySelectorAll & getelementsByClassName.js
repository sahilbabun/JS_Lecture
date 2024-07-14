// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

// getElementsByClassName
// const navItems = document.getElementsByClassName("nav-item");  // This line give output as:- HTMLCollection
// console.log(navItems);
// console.log(typeof navItems);
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);
// console.log(Array.isArray(navItems));

// querySelectorAll
const navItems = document.querySelectorAll(".nav-item");  // Node List
console.log(navItems);