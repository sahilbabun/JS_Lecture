// Sets (it is iterable)
// store data in linear order
// sets also have its own methods
// No index-based index
// Order is not guaranteed
// unique items only (no duplicates allowed)
// The values can be of any type, primitive values or objects.


// How to Create a Set
// You can create a JavaScript Set by:
//    -Passing an array to new Set()
//    -Create an empty set and use add() to add values.

// const numbers = new Set(); // set ko iss trh banate hai 
// const numbers = new Set("abc"); // output:- Set(3) [ "a", "b", "c" ]
// const numbers = new Set([1,2,3,4]);
// console.log(numbers);

// const items = ["item1", "item2", "item3"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// for(let number of numbers){
//     console.log(number);
// };

// Set() ko use kab karna chahiye ?
// Jab aapke paas unique value hai aur aapko pata hai ke ek value ek baar
// se jyada nhi aa skti, to uss case mei Set() use karte hai.
// Eg.- 
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
let length = 0;
for(let number of uniqueElements){
    length ++;
};
console.log(length); // length nikalne ka tarika.


// numbers.add(["item1", "item2", "item3"]);
// numbers.add(["item1", "item2", "item3"]);
// upad k dono line, set mei store ho jayega q k dono alag alag memory location
// pe hai aur dono ka address alag hai 
// *Imp.:- Jab aap square brackets[] lagake naya array banate hai to wo 
// array hamare memory ke andar naya array banta hai. Its doesn't matter
// ke elements same hai ke nahi hai, wo array naya banega.

// agar hame set() mei check karna hai ke koi element hai yaa nahi hai, to 
// hamare paas ek method hai - has() method-> ye yaa to true return karega
// yaa to false return karega. 

// if(numbers.has(1)){
//     console.log(" 1 is Present");
// }else{
//     console.log(" 1 is not Present")
// };



// console.log(numbers);
// console.log(numbers[2]); // undefined 
