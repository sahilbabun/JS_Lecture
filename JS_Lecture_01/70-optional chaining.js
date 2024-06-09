// optional chaining.

// The optional chaining (?.) operator accesses an object's property or 
// calls a function. If the object accessed or function called using this 
// operator is undefined or null, the expression short circuits and 
// evaluates to undefined instead of throwing an error.

// const user = {
//     firstName: 'Sahil',
//     address: {housenumber: 1234}
// };

// console.log(user.firstName);
// console.log(user.address.housenumber);


const user = {
    firstName: 'Sahil',
    address: {housenumber: 1234}
};

console.log(user?.firstName);
console.log(user?.address?.housenumber); // optional chaining using "?."