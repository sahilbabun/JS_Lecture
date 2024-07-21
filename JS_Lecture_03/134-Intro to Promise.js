// Promise
// Promise browser ka features hai .
// promise add hota hai microtask queue mei.

// console.log("Script Start");
// const bucket = ['coffee', 'chips', 'vegetables', 'salt','rice'];

// const friedRicePromise = new Promise((resolve, reject) => {
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//         resolve({value: "friedRice"});
//     } else {
//         reject("couldn't complete");
//     }
// });

// produce



// consume
// how to consume
// consume wala kaam browser karega

// friedRicePromise.then(
    // jab promise resolve hoga
//     (myFriedRice) => {
//     console.log("lets eat ", myFriedRice);
//     }
//     , 
    // jab promise reject hoga
//     (error) => {
//     console.log(error);
//     }
// );


// By using catch()
// friedRicePromise.then(
    // jab promise resolve hoga
//     (myFriedRice) => {
//     console.log("lets eat ", myFriedRice);
//     }
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// );

// setTimeout(()=>{
//     console.log("hello from setTimeout");
// });

// for(let i=0; i<=100; i++) {
//     console.log(Math.random(), i);
// }

// console.log("Script End!!!!");




// Akshay Saini

// Promise :- Promises are used to handle asynchronous operations in javascript.
//            Promise objects are immutable. So whenever it fulfilled and whenever we have data inside our promise object,
//            we can just pass it here and there in our code and we don't have to worry about that someone can mutate that data.

// Definitions of Promise.
// Def.: 1 => Promise object is a placeholder for a certain period of time until we receive a value from a asynchronous operation.

// OR

// Def.: 2 => Promise is a container for a future value, which it will have after the promises resolved.

// OR

// Def.: 3 => A Promise is an object representing the eventual completion or failure of an asynchronous operation.


// const cart = ["shoes", "pants", "kurta"];


// Here we passing the callback function to the another function and we blindly rely on that function.
// And createOrder API calls it whenever he wants to.
// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// }); // It return some orderId and that orderId passed to proceedToPayment for further purpose.


// Here, createOrder API will only do it's job to create an order and it will fill the promise object with the data orderId 
// whenever it wants to and as soon as this promise object is filled wit that data, it will automatically call our callback function back
// and we will have the control of our program with us.
// const promise = createOrder(cart);



// And here we attaching a callback function to a promise object.
// And in this case, we have the control of the program with us.
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });



// If you want to see that object, we will use a function "fetch()".
// fetch() :- It is a basically an API given by browsers to us to make external calls.
// This fetch function returns a promise.

// const GITHUB_API = "https://api.github.com/users/sahilbabun";

// const user = fetch(GITHUB_API);

// what are the state of promise objects ?
// There are 2 things:-
// 1.) state of promise. And inside state , there are three states:-
//    a.) pending
//    b.) fulfilled
//    c.) rejected
// 2.) result of promise.

// PromiseResult will store whatever data it returns, whatever the data the fetch method will return, this will be 
//  stored inside promise result.

// PromiseState tells you in what state that promises,initially the promise will be in pending state and once we have
//  got the data back, it might take four sec five sec for that asynchronous operations to get completed,
//  so after that, that promise state changes to fulfilled state.

// console.log(user);

// user.then(function(data){
//     console.log(data);
// });


// Promise Chaining
const cart = ["shoes", "pants", "kurta"];

// Example of calling hell or pyramid of doom.
createOrder(cart, function(orderId){
        proceedToPayment(orderId, function(paymentInfo){
            showOrderSummary(paymentInfo, function(){
                updateWalletBalance();
            });
        });
});


// const promise = createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// another way.
// createOrder(cart)
// .then(function(orderId){
//     proceedToPayment(orderId);
// }) // This createOrder API will return as a promise and then we will attach a callback function over here.
// after proceed to payment,we also had to show order summary, then add one more "then" statement after this.
// and we would have just attached another callback function to this promise chain. This is known as Promise Chaining.
// .then(function(paymentInfo){
//     showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     updateWalletBalance(paymentInfo);
// });


// whenever you are attaching a lot of "then()" function and lot of callbacks in this promise chain what happens 
// is we used to pipe the data, we want the data to flow in the whole chain what will happen is, whatever is the
// response of this createOrder should pass into next chain and whatever the response of this proceedToPayment 
// should pass down the chain and then whatever is there returned from showOrderSummary should pass down the 
// chain for that you have to take care in mind that you return from here.
// So we always return a promise from in promise when we are chaining it. So that's when we will get data properly 
// into our chain. So this is how we write code.
// createOrder(cart)
// .then(function(orderId){
//     return proceedToPayment(orderId);
// }) 
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     return updateWalletBalance(paymentInfo);
// });


// Another way by using arrow function
createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo));


// Issues of callback function
// 1.) Inversion of control. means we were passing a function inside another API and we were given control of our program to some another API
//     which we wanted to avoid that was "inversion of control" 
//  How did we solve it ?
// Ans:- we basically have a promise object and that promise object will be eventually filled with a result of async operation that promise object
//       and we don't pass a function inside any other function but what we do is we attach a callback function to that promise object and 
//       whenever we have data inside or whenever a promise is resolved that automatically, that callback function will automatically be called by promises.
//    -> promise give us guarantee and trust in our whole transaction how because you can resolve promise just once and you can only have three states for promises
//       either pending or fulfilled or rejected
// 2.) callback hell. -> to overcome this we use promise chaining.