// call, apply, bind methods.

// function hello(){
//     console.log('hello');
// };
// hello.call();


function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName: 'Sahil',
    age: 24,
    // about: function() {
    //     console.log(this.firstName, this.age);
    // }
    // about: function(hobby, favMusician) {
    //     console.log(this.firstName, this.age, hobby, favMusician);
    // }
};

const user2 = {
    firstName: 'Babu',
    age: 25,
};


// call
// How call works
// --The call() method allows you to call a function with a specified this 
// --value and arguments. This can be particularly useful when you want to
// --use a method of one object in the context of another object.


// user1.about.call(); // undefined undefined 
// user1.about.call(user1); // Sahil  24  --yaha this ki value user1 hai.
// user1.about.call(user2); // Babu  25
//yaha call() ke argument jo v paas hoga to this usko refer karega.yaha this ki value user2 hai. 

// user1.about.call(user2,'guitar','mozart'); // Babu 25 guitar mozart
about.call(user1,'guitar','mozart'); // Sahil 24 guitar mozart


//apply
about.apply(user1, ["guitar","mozart"]); // Sahil 24 guitar mozart
// call() mei alag alag paas kr rhe thae aur apply() mei el array bana kr dono ko array mei paas kr de rhe hai.


// bind()
// --With the bind() method, an object can borrow a method from another object.
// bind ek function return karega.
const func = about.bind(user1, "guitar","mozart");
func(); // Sahil 24 guitar mozart