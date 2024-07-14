// static list vs live list

// querySelectorAll hamein static list degi. ye hame NodeList dete hai.
// getElementsBySomething hamein live list degi. ye hame HTMLCollection dete hai.


// const listItems = document.querySelectorAll(".todo-list li");
// console.log(listItems);

// static list
// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);
// NodeList(5) [li, li, li, li, li]


// live list
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);
console.log(listItems);
// HTMLCollection(6) [li, li, li, li, li, li]