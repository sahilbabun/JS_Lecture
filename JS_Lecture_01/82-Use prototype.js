// // const userMethods = {
// //     about : function(){
// //         return `${this.firstName} is ${this.age} years old`;
// //     },
// //     is18 : function(){
// //         return this.age >= 18;
// //     },
// //     sing: function(){
// //         return 'toon naa naa naa laa laa'
// //     }
// // };

// // prototype ek simple object hai aur
// // __proto__ ek refernce hai,kiska refernce hai, jo v chain create karoge uska refrence hai.


// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype); 
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.address = address;
//     user.age = age;
//     return user;
// };

// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// };
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// createUser.prototype.sing = function(){
//     return "la la la la";
// };


// // console.log(createUser.prototype);

// const user1 = createUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
// const user2 = createUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
// const user3 = createUser("Amir", "Babu", "sahil@gmail.com", 17, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.sing());
// console.log(user1.is18());
