class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

// const animal1 = new Animal("Tom", 2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// class Dog {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }


// Here we use concept of extends keyword in inheritance.
class Dog extends Animal {

}

const tommy = new Dog("Duffy",3);
console.log(tommy.isCute());