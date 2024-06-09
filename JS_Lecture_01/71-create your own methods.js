// methods.
// function inside object called methods.
// method banane k liye object banana padega.

// const person = {
//     firstName: 'Sahil',
//     age: 24,
//     about: function() {
//         console.log('person name is Sahil and the age is 24');
//     }
// };

// person.about();


// let if we change the value of firstName then in function() there will be
// be no change in console.log

// const person = {
//     firstName: 'Babu',
//     age: 24,
//     about: function() {
//         console.log('person name is Sahil and the age is 24');
//     }
// };

// person.about(); // output - person name is Sahil and the age is 24



// Then to tackle this issue, we use template string but if we directly 
// put the key inside the template string then it shows error. So then
// tackle this error we use "this" property.

// const person = {
//     firstName: 'Supriya',
//     age: 23,
//     about: function() {
//         console.log(`person name is ${this.firstName} and the age is ${this.age}`);
//     }
// };

// person.about();


function personInfo(){
    console.log(`person name is ${this.firstName} and the age is ${this.age}`);
};

const person1 = {
    firstName: 'Supriya',
    age: 23,
    about: personInfo
};

const person2 = {
    firstName: 'Sahil',
    age: 24,
    about: personInfo
};

const person3 = {
    firstName: 'Babu',
    age: 22,
    about: personInfo
};

person1.about(); // about ko person1 call kr rha hai, this ki value person1 pura object hai, object mei se firstName extract kr rha hu.
person2.about();
person3.about();