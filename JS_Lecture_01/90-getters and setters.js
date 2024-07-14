// getters and setters.

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // fullName(){
    //     return `${this.firstName} ${this.lastName}`;
    // }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("sahil","babu", 24);
// console.log(person1);
// console.log(person1.fullName());
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("Mohammad", "Nanneh");
// Another way to assign value :-
// person1.firstName = "Nanneh"
// person1.lastName = "Mohammad";
// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "Mohammad Nanneh";
console.log(person1);



// agr aap kisi method ko property ke trh use krke output karana chhate hai to method ke aage 'get' ka use krte hai.
// get fullName(){
//     return `${this.firstName} ${this.lastName}`;
// }
// console.log(person1.fullName);

// agar hum baad mei firstname, lastName change krna chhahte hai to hum 'setter' ka use krte hai.
// set fullName(fullName){
//     const [firstName, lastName] = fullName.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// person1.fullName = "Mohammad Nanneh";
// console.log(person1);