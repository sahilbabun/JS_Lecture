const obj1 = {
    key1: 'value1',
    key2: 'value2'
};

// const obj2 = {
//     key3: 'value3'
// };

// khali object bna ke v hum value add kr skte hai.
// const obj2 = {};
// obj2.key3 = 'value3';


// __proto__  --> JavaScript.

// In Official Ecmascript Documentation:

// __proto__ is written as --> [[prototype]] = Both are same.

// This "prototype" is different.




// There is one more way to create empty object
const obj2 = Object.create(obj1); // Iss line se, jo obj2 ka proto set kar rhe thae, wo set ho rha tha obj1.iss line se proto set ho rha hai
// console.log(obj2); // Object {  } -> empty object.
// obj2 ki property mei ye set hogyi obj1.
obj2.key3 = 'value3';
// obj2.key2 = 'unique';
console.log(obj2);
// console.log(obj2.key2);

console.log(obj2.__proto__); // iska proto dekhne ko milega obj1. __proto__ mei hum obj1 ka address set kr rhe hai.

obj2.__proto__  // isko hum "dunder" v bolte hai.

// obj2 ka __proto__ ho gya obj1, kisse hua, Object.create se hua
