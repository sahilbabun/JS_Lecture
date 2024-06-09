// while loop in array

const fruits = ["apple", "orange", "grapes"];
const fruits2 = [];
let i = 0;
while(i < fruits.length){
    fruits2.push((fruits[i]).toUpperCase());
    i++;
}
console.log(fruits2);