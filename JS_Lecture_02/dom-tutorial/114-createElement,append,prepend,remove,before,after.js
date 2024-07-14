// document.createElement()
// append
// prepend
// remove


// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("teach Students");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// newTodoItem.appendChild(newTodoItemText);
// todoList.append(newTodoItem); // add text at end.
// todoList.prepend(newTodoItem); // add text at first.
// console.log(newTodoItem);

// want to remove Todo-1
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);


// before
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);

// after
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);

