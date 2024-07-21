// Promise.resolve :- ye ek promise return karta hai.
// Promise chaining


// const myPromise = Promise.resolve(5);
// myPromise.then((value) => {
//     console.log(value);
// });

// OR

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then((value) => {
//     console.log(value);
// });

// then() 
// then() method hamesha promise return karta hai.

function myPromise(){
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

// myPromise()
//         .then((value) => {
//             console.log(value);
//         })

// myPromise()
//         .then((value) => {
//             console.log(value);
//             value += "bar";
//             return value; // yaha ek promise return ho rha hai.
            // return Promise.resolve(value); // internally this type of work in doing.
        // })
        // .then((value) => {
        //     console.log(value);
        // });

 // Promise chaning.
myPromise()
        .then((value) => {
            console.log(value);
            value += "bar";
            return value;
        })
        .then((value) => {
            console.log(value);
            value += "baaz";
            return value;
        })
        .then((value) => {
            console.log(value);
        });

// mei string pe promise nahi laga sakta.
// "sahil".then((value) => {
//     console.log(value);
// });
// output :- Uncaught TypeError: "sahil".then is not a function


// myPromise()
//         .then((value) => {
//             console.log(value);
//             value += "bar";
            // return value;  // agar mei yaha return na karu to output undefined dega.
        // })
        // .then((value) => {
        //     console.log(value);
        // });