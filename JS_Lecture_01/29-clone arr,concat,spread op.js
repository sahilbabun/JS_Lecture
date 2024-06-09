// How to clone array 
// means how to copy array.

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0);

// To add extra item to array2, then we use this-
// let array2 = array1.slice(0).concat(["item3","item4"]);
// let array2 = [].concat(array1,["item3","item4"]);
// let array2 = [].concat(array1);

//new way -> spread operator.
// let array2 = [...array1]; // here all the elements of array1 copied to array2.
// let array2 = [...array1,"item3","item4"]; 

let oneMoreArray = ["item3","item4"];
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);


// How to concatenate two arrays.

