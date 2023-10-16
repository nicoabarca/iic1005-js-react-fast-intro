// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// LO MÁS IMPORTANTE POR ENTENDER PARA LA ACTIVIDAD DEL JUEVES

// Formas de declarar una función
function square(number) {
    return number * number;
}

const fullName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const allowedToVote = (age) => {
    return age >= 18 ? "Yes" : "No";
}

square(2); // 4
fullName("John", "Doe"); // "John Doe"
allowedToVote(12); // No

// Callback functions: funciones que reciben como argumento otra función 

function addition(a, b) {
    return a + b;
}

function calculate(num1, num2, callback) {
    const result = callback(num1, num2);
    console.log("Result: " + result);
}

console.log("Ejemplo Callback 1");
calculate(5, 10, addition);

console.log("Ejemplo Callback 2");
calculate(5, 10, (a, b) => {
    return a + b;
})

// Array methods:




