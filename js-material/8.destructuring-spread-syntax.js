// https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript

// Destructuring syntax for objects
const person = {
    userName: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

const { userName, age, address: { city } } = person;

console.log(userName); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: Anytown

// Spread syntax for iterables
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
