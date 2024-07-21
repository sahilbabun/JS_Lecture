// Consumer part of code

const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); // gives orderId
// console.log(promise);

createOrder(cart)
.then(function(orderId){
    console.log(orderId); // whatever we will return from here will be passed down the chain.
    return orderId;
})
.catch(function(err) {
    console.error(err.message);
}) // To handle the errors of createOrder.
.then(function(orderId){
    return proceedToPayment(orderId); // whatever the response of this proceedToPayment, 
    // will be passed to the next callback function of this chain. (means in the next "then()" function).
})
.then(function(paymentInfo){ // ... and then we will get paymentInfo it will tell us whether the payment was 
    // successful or not successful and let us just log this paymentInfo.
    console.log(paymentInfo);
})

// if it gives error then we use to handle the error "catch()"
.catch(function(err) {
    console.error(err.message);
})
.then(function(orderId){
    console.log("No matter what happens, I will definitely be called.");
})


// Producer part of code

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        // createOrder
        // validateCart
        // orderId 
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid"); // way to create error.
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    });
}

function validateCart(cart) {
    // return true;
    return false;
};


