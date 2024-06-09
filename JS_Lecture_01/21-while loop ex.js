// while loop example

// print first n natural number.

let num = 100;
let total = 0;
let i = 0;

while(i<= 100){
    total = total + i;
    i++;
}
console.log(total);
// This one take linear time.


// first n natural number formula -> (n*(n+1))/2
// let total = (num*(num+1)) / 2;
// console.log(total);
// This one take constant time -> This is fast as compare to upper logic.