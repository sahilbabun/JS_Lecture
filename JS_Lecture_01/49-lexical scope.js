// Lexical Scope

// The lexical scope of myFunc function is myApp because myFunc function define at myApp function
//... and myApp function define at Global scope or environment.


const myVar = "value1";

function myApp(){
    // const myVar = "value1";

    function myFunc(){
        // const myVar = "value2";
        const myFunc2 = () => {
            console.log("inside myFunc", myVar);
        }
        // console.log("inside myFunc", myVar);
        myFunc2();
    }
    
    console.log(myVar);
    myFunc();
}
myApp();
