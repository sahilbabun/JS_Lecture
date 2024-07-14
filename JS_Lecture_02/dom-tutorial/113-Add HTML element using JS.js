// Add new HTML elements to page



// innerHTML to add html element
const todoList = document.querySelector(".todo-list");
// console.log(todoList);
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li> New Todo </li>";
todoList.innerHTML = todoList.innerHTML + "<li> New Todo </li>";
todoList.innerHTML += "<li> Teach Students </li>";


// when you should use it, when you should not


