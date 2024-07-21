// function returning promise

function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetables', 'salt','rice'];
    return new Promise((resolve, reject) => {
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve({value: "friedRice"});
        } else {
            reject("couldn't complete");
        }
    })
};

ricePromise().then(
    (myFriedRice) => {
        console.log("let's eat ", myFriedRice);
    }
    ).catch(
        (error) => {
            console.log(error);
        }
    )