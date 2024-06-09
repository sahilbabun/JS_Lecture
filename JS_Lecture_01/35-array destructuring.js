// array destructuring

// const myArray = ["value1", "value2","value3"];
// const myArray = ["value1", "value2"];
const myArray = ["value1", "value2","value3","value4"];
// const myArray = ["value1"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1: " + myvar1);
// console.log("value of myvar2: " + myvar2);

// let [myvar1, myvar2] = myArray; // Array Destructuring
let [myvar1, myvar2, ...myNewArray] = myArray;
// let myNewArray = myArray.slice(2);
console.log(myNewArray);
// let [myvar1, ,myvar2] = myArray;
// myvar1 = "value Changed";
console.log("value of myvar1: " + myvar1);
console.log("value of myvar2: " + myvar2);
// console.log("value of myvar3: " + myvar3);