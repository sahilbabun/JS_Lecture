// small warning

const user1 = {
    firstName: 'Sahil',
    age: 24,
    about: function(){
        console.log(this.firstName, this.age);
    }
};

// user1.about();
// const myFunc = user1.about;
const myFunc = function(){
    console.log(this.firstName, this.age);
}; // q k yaha myFunc mei pura function ko bhej rhe thae to yaha myFunc mei refrence pass ho rha tha.
myFunc(); // undefined undefined 