// array push pop

let fruits = ["apple", "mango", "Grapes"];
console.log(fruits);
// if we want to add any elements to the array,then we use "push".
// push -> it add the elements or items to the end of array.
// fruits.push("Banana");
// console.log(fruits);

// pop -> remove elements or items from the last of the array and return them as a string.
// let poppedfruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits are ", poppedfruit);


// array shift unshift

// unshift -> add elements or items to the start of the array.
// fruits.unshift("Banana");
// console.log(fruits);

// shift -> remove elements or items from the starting of the array and return them as a string.
let removefruit = fruits.shift();
console.log(fruits);
console.log("remove fruit is ", removefruit);


// push and pop is fast as compared to shift and unshift.
// push and pop easily remove or add elements or items from the array.
// But shift and unshift have to first shift to starting of the memory,then add or remove elements.