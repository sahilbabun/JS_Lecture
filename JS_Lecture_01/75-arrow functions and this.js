// arrow functions

// arrow function ka khud ka "this" nhi hota , arrow function jo "this" leta hai apne surrounding se leta hai.
// Arrow function ka "this" hm change nhi kr skte.

const user1 = {
    firstName: 'Sahil',
    age: 24,
    // about: function(){
    //     console.log(this.firstName, this.age);
    about: () => {
        // console.log(this); // // yaha iska jo "this" hoga wo window hoga. Window http://127.0.0.1:5500/
        console.log(this.firstName, this.age); 
    }
};

user1.about();