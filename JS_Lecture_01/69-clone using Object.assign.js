// clone using Object.assign

// memory - object stored here.

const obj = {
    key1: 'value1',
    key2: 'value2'
};

// const obj2 = {...obj}; // new way to assign object.
const obj2 = Object.assign({}, obj); // old way to assign object.
obj.key3 = 'value3';
// const obj2 = obj;
console.log(obj);
console.log(obj2);
