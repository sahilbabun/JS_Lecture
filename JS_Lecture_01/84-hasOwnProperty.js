// hasOwnProperty

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
// console.log(user1);
// console.log(user1.about());
// console.log(user1.sing());
// console.log(user1.is18());

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}