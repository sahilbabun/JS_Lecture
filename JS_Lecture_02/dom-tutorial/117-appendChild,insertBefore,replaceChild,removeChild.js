// some old methods to support poor IE(Internet Explorer) browser
// appendChild
// insertBefore
// replaceChild
// removeChild


// appendChild
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// ul.append(li);


// insertBefore
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo");
// li.textContent = "new todo";
// ul.insertBefore(li, referenceNode);


// replaceChild
// const ul = document.querySelector(".todo-list");
// new element
// const li = document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector(".first-todo");
// ul.replaceChild(li, referenceNode);


// removeChild
const ul = document.querySelector(".todo-list");
// new element
const li = document.createElement("li");
li.textContent = "new todo";
const referenceNode = document.querySelector(".first-todo");
ul.removeChild(referenceNode);

