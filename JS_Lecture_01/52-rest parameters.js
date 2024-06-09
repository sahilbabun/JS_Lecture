// rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`,c);
// }

// myFunc(3,4,5,6,7,8,9);


// function addAll(...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers)); // This method is used to check whether this is array or not.
// }

// addAll(1,2,3,4,5,6);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

const ans = addAll(1,2,3,4,5,689,9876);
console.log(ans);