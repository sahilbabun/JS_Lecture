// primitive vs reference data type

// primitive data types
// primitive types are store in stack memory.

// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is",num1);
// console.log("value is num2 is",num2);
// num1++;
// console.log("after incrementing num1");
// console.log("value is num1 is",num1);
// console.log("value is num2 is",num2);

// reference data types -> Array
// reference types are store in heap memory.
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array1");
console.log("array1", array1);
console.log("array2", array2);