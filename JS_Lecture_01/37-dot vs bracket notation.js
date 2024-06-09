// difference between dot vs bracket notation
// when in key section, there any key present which has two words like "person hobbies"
//.. then in that case we use bracket notation to access the data of that key.
//.. if in this case we use dot notation then it gives error.
//.. This is the major difference between dot vs bracket notation

const person = {
    name: "Sahil",
    age: 24,
    "person hobbies": ["Cricket","Sleeping","Eating Biryani"]
}
console.log(person["person hobbies"]);

// If we want to add other key-value pairs like this given below - 
const key = "email";
person[key] = "er.sahilb22@gmail.com";
console.log(person);