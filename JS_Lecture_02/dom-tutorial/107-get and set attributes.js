// get and set attributes.

// get attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

// set attributes
// link.setAttribute("href", "http://codeprog.com");
// console.log(link.getAttribute("href"));

// Example:- if there is a word "#home" then we have to remove # from #home, How?
console.log(link.getAttribute("href").slice(1));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));
