// static methods and properties.

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // static method class ke naam se hi call ho skta hai,agr hum kisi object ke naam se call larenge to error dega.
    // static method ko call krne ke liye object banane ki jrurt nahi.
    static classInfo(){
        return `this is person class.`;
    }

    // static property ko v hum class se hi call kar skte hai, object se nahi.
    // agar hum static property ko object se call karte hai to return mei 'undefined' dega.
    static desc = "this is person class property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("sahil","babu", 24);
console.log(person1.eat());

// static method class ke naam se hi call ho skta hai,agr hum kisi object ke naam se call larenge to error dega.
// static method ko call krne ke liye object banane ki jrurt nahi.
const info = Person.classInfo();
console.log(Person.desc);
console.log(person1.desc);  // output :- undefined.
console.log(info);