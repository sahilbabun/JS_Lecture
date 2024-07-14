// class keyword

// class are fake in JS.
// new keyword kr binna haum class constructor ko call nahi kar sakte.

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log("Constructor called ");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la"; 
    }
    func(a){
        console.log(a);
    }
}

const user1 = new CreateUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
const user2 = new CreateUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
const user3 = new CreateUser("Amir", "Babu", "sahil@gmail.com", 17, "my address");
console.log(user1.firstName);
console.log(user2.is18());

// to check prototype
console.log(Object.getPrototypeOf(user1));

user1.func("Sahil");

















// function CreateUser(firstName, lastName, email, age, address){
//     // const user = Object.create(createUser.prototype); 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.address = address;
//     this.age = age;
//     // return this; --> yaha pe return this likhne ki jrurt nahi hoti q ki new keyword apne aap return krta hai.
// };

// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// };
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// CreateUser.prototype.sing = function(){
//     return "la la la la";
// };


// console.log(CreateUser.prototype);

// const user1 = new CreateUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
// const user2 = new CreateUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
// const user3 = new CreateUser("Amir", "Babu", "sahil@gmail.com", 17, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.sing());
// console.log(user1.is18());