// splice method
// start, delete, insert

//  splice() Method is an inbuilt method in JavaScript that is used to 
// change the contents of an array by removing or replacing existing 
// elements and/or adding new elements.
// It modifies the original array and returns an array of the removed elements.
// Syntax: Array.splice( index, remove_count, item_list )

const myArray = ['item1', 'item2','item3'];

// delete - isme delete k sath jo item delete hua tha wo return mei v dega.
// const deletedItem = myArray.splice(1, 2);
// console.log('deleted item', deletedItem);
// console.log(myArray);

// insert
// myArray.splice(1, 0, 'inserted item');
// console.log(myArray);

// insert and delete simultaneously
const deletedItem = myArray.splice(1, 2, 'inserted item1','inserted item2');
console.log('delete item', deletedItem);
console.log(myArray);