// const user1 = {
//     firstName: "sahil",
//     lastName: "babu",
//     email: "sahil@gmail.com",
//     age: 24,
//     address: "House number, Colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// };

// const userInfo = user1.about();
// console.log(userInfo);

// 1.) function (that function create object)
// 2.) add key value pair
// 3.) object ko return karega

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.age = age;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
};

const user1 = createUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
