// iterables 
// jispe hum for of loop laga sakte hai
// string, array are iterables

// const firstName = "Sahil";
// for(let char of firstName){
//     console.log(char);
// };

// const items = ["item1", "item2", "item3"];
// for(let item of items){
//     console.log(item);
// };

// const users = {'key1': 'value1', 'key2': 'value2'};
// for(let user of users){
//     console.log(user);
// }; // here output shows :- TypeError: users is not iterable -- because objects are not iterable type.




// array like objects
// jinke bas length property hoti hai
// aur jisko hum index se access kar sakte hai
// example :- string

const firstName = "Sahil";
console.log(firstName.length);
console.log(firstName[2]);
