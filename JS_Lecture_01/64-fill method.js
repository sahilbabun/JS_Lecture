// fill method
// value,  start. end

// fill() method is used to fill all the elements of an array from a start index to an end index with a static value.
// It mutates the original array and returns the modified array.
// Syntax: arr.fill(value, start, end)

// ek array banana hai aur iss array mei hona chahiye 10 elements aur 10 ke 10 elements hona chahiye -1.
// Eg.- [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
// const myArray = new Array(10).fill(-1); // Here we using constructor.
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0, 2, 5);
console.log(myArray);