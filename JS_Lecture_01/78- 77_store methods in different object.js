const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    }
};

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.age = age;
    user.about = userMethods.about; // yaha hum userMethods ka refrence store kr rhe hai.
    user.is18 = userMethods.is18;  // agar hum aisa nhi karenge , to jab jab ye object call
    // hoga tb tb ye methods memory mei store hoga naye hagah pd.
    return user;
};

const user1 = createUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
const user2 = createUser("Sahil", "Babu", "sahil@gmail.com", 24, "my address");
const user3 = createUser("Amir", "Babu", "sahil@gmail.com", 17, "my address");
console.log(user1.about());
console.log(user3.about());