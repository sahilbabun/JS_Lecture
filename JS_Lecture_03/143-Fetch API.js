// fetch API

// POST request hota hai data ko create karne ke liye server pe.


// const URL = "https://jsonplaceholder.typicode.com/posts";

// const whatIsThis = fetch(URL);
// console.log(whatIsThis);

// fetch(URL)
//     .then(response => {
        // console.log(response);
        // console.log(response.json()); // ye v ek promise return karega
        // return response.json();
    //     if(response.ok){
    //         return response.json();
    //     } else {
    //         throw new Error("Something went wrong");
    //     }
    // })
    // .then(data => {
        // console.log("then"); // "then()" chl rhe hai mtlb response mil rhe hai.
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.log("Inside catch");
    //     console.log(error);
    // })
    // fetch() promise return karta hai
    // fetch() reject tabhi karega jab network related error aa rhi hai.
    // but yaha "then()" chl rha hai.



const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error("Something went wrong");
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("inside catch");
        console.log(error);
    })