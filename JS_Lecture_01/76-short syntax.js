// short syntax

// const user1 = {
//     firstName: 'Sahil',
//     age: 24,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }
// };

// Alternate code snippet of upper one.
const user1 = {
    firstName: 'Sahil',
    age: 24,
    about(){
        console.log(this.firstName, this.age);
    }
};

user1.about();