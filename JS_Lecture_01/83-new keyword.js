// new keyword


// constructor function - ye hamare liye construct kr rha hai object.
function CreateUser(firstName, lastName, email, age, address){
    // const user = Object.create(createUser.prototype); 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.age = age;
    // return user;
};

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.sing = function(){
    return "la la la la";
};


console.log(CreateUser.prototype);

const user1 = new CreateUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
const user2 = new CreateUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
const user3 = new CreateUser("Amir", "Babu", "sahil@gmail.com", 17, "my address");
console.log(user1);
console.log(user1.about());
console.log(user1.sing());
console.log(user1.is18());









// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// };
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }


// function hame free mei space deta hai,kya space deta hai, ek object deta hai, kaunsa object deta hai prototype.

// new keyword do two things:-
// 1.) empty object deta hai,  this = {}
// 2.) return this


// const user1 = new createUser("sahil", 24);
// user1.about();