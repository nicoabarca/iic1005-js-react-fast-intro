// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// For loop
for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
}

// While loop
let counter = 1;
while (counter <= 5) {
    console.log("Number: " + counter);
    counter++;
}

// Iterar un objecto
const person = {
    name: "John",
    age: 30,
    city: "Exampleville"
};

for (let property in person) {
    console.log(property + ": " + person[property]);
}

// Iterar un array
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log("Number: " + number);
}