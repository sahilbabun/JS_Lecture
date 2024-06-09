// Spread Operator -> This is an array case.
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const myNewArray = [...array1, ...array2, 89, 67];
// const myNewArray = [..."abc"]; // Array(3) [ "a", "b", "c" ]
// const myNewArray = [..."123456789"]; // Array(9) [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ]

// console.log(myNewArray);


// Spread Operator -> This is in objects case.
// if in any obj there are two same key are present then the new one always override the previous one.
// Example ->
// const obj1 = {
//     key1: "Value1",
//     key2: "Value2",
// }
// console.log(obj1); // Object { key1: "Value59", key2: "Value2" }

// const obj2 = {
//     key3: "Value3",
//     key4: "Value4",
// }

// const newObject = {...obj1, ...obj2};
// console.log(newObject); // Object { key1: "Value1", key2: "Value2", key3: "Value3", key4: "Value4" }


const obj1 = {
    key1: "Value1",
    key2: "Value2",
}

const obj2 = {
    key1: "valueUnique",
    key3: "Value3",
    key4: "Value4",
}

// const newObject = {...obj2, ...obj1};
// const newObject = {...obj2, ...obj1, key68: "value68"};
// output -> Object { key1: "Value1", key3: "Value3", key4: "Value4", key2: "Value2", key68: "value68" }

// const newObject = { ..."abc"}; // Object { 0: "a", 1: "b", 2: "c" }
const newObject = { ...["item1", "item2",]}; // Object { 0: "item1", 1: "item2" }
console.log(newObject); // Object { key1: "Value1", key3: "Value3", key4: "Value4", key2: "Value2" }
