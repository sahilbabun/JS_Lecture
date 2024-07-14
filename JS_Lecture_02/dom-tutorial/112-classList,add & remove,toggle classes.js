// classList, add & remove, toggle classes

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo);

// To check how many classes are added in section-todo:
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);

// how to add class using JS
// sectionTodo.classList.add('bg-dark');

// how to remove container class using JS
// sectionTodo.classList.remove('container');

// koi class exist krti hai yaa nahi classList mei ?
const ans = sectionTodo.classList.contains("container");
console.log(ans);


// Toggle classes
// sectionTodo.classList.toggle("bg-dark"); // toggle ye karega age bg-dark pehle se hai to rmv kr dega aur agr nahi h to add kr dega.
// sectionTodo.classList.toggle("bg-dark"); // toggle ye karega age bg-dark pehle se hai to rmv kr dega aur agr nahi h to add kr dega.


const header = document.querySelector(".header");
console.log(header.classList);  // DOMTokenList ['header', value: 'header']

// class add krni hai hame, eg:- bg-dark class add krni hai header kr andr:
// header.classList.add("bg-dark");
