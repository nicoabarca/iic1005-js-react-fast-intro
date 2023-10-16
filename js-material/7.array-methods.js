// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// https://twitter.com/steveluscher/status/741089564329054208


// Array de ejemplo 
const numbers = [1, 2, 3, 4, 5];

// Usar map para duplicar cada número en el array
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Usar filter para obtener sólo los números pares del array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


// Usar reduce para sumar todos los números del array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Usar forEach para imprimir cada número del array 
numbers.forEach(num => console.log(num)); // Output: 1 2 3 4 5

