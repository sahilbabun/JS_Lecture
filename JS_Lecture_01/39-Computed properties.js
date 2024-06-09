// Computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// Try this type..
// const obj = {
//     objkey1: "myvalue1",
//     objkey2: "myvalue2",
// }

// sol.
// const obj = {
//     [key1]: value1,
//     [key2]: value2,
// }
// console.log(obj);

// Assume if we have not bracket notation,then how you can do that..?
// Sol.
const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);