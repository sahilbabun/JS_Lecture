// Nested destructuring

const users = [
    {userId: 1, firstName: "Sahil", gender: "Male"},
    {userId: 2, firstName: "Amir", gender: "Male"},
    {userId: 3, firstName: "Babu", gender: "Male"}
]
const [user1, user2, user3] = users;
console.log(user1);

// if we want firstName from object-1 and gender from object-3,then this-
// const [{firstName}, , {gender}] = users;
// console.log(firstName);
// console.log(gender);

// if we want to change "key name" to keep other variable name ,then this-
// const [{firstName: Name}, ,{gender: gen}] = users;
// const [{firstName: Name, userId}, ,{gender: gen}] = users;
// console.log(Name);
// console.log(userId);
// console.log(gen);