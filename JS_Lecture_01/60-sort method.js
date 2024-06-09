// sort method.
// The sort() method arranges the elements of an array in place and returns the
// sorted array. By default, it sorts the elements alphabetically as strings.

// The sort() method sorts the elements as strings in alphabetical and ascending order.

// sort() method change the original array.

// const userNames = ["harshit", "abcd", "mohit", "nitish","aabc", "ABCD", "Harsh"];
// userNames.sort();
// console.log(userNames);



// const numbers = [5,9,1200,410,3000];
// In the given array,first sort() method convert this numbers to string 
// and then compare the ASCII VALUES of this number or string and then 
// return the value. sort() method gives output a/c to string.
// ["5", "9", "1200", "410", "3000"]
// [53,57,49,52,51]
// numbers.sort();
// numbers.sort((a,b) =>{
//     return a-b;
// });
// numbers.sort((a,b) => a-b);
// console.log(numbers);

// How its work. 
// Eg.- 1200, 410
// a-b ---> 1200 - 410 = 790
// a-b ---> positive(greater than zero) ---> b,a
// 410, 1200

// a-b ---> negative (greater than zero) ---> a,b
// 5, 9 --> -4


// price lowToHigh, highToLow
// const products = [
//     {productId: 1, productName: 'p1', price: 300},
//     {productId: 2, productName: 'p2', price: 3000},
//     {productId: 3, productName: 'p3', price: 200},
//     {productId: 4, productName: 'p4', price: 8000},
//     {productId: 5, productName: 'p5', price: 500},
// ];

// // lowToHigh
// const lowToHigh = products.slice(0).sort((a,b) => {
//     return a.price - b.price;
// });
// console.log(lowToHigh);

// // highToLow
// const highToLow = products.slice(0).sort((a,b) => {
//     return b.price - a.price;
// });
// console.log(highToLow);

// Example 1: Sorting an array of strings.
// JavaScript to illustrate sort() function
function func() {

	// Original string
	let arr = ["Geeks", "for", "Geeks"]

	console.log(arr);
	// Sorting the array
	console.log(arr.sort());
}
func();
