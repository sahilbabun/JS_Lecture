const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon naa naa naa laa laa'
    }
};

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods); // __proto__ kya hai, __proto__ userMethods ka reference hai.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.age = age;
    user.about = userMethods.about; // yaha hum userMethods ka refrence store kr rhe hai.
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
};

const user1 = createUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
const user2 = createUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
const user3 = createUser("Amir", "Babu", "sahil@gmail.com", 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());