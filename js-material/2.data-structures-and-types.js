// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#data_structures_and_types

// JavaScript tiene 7 tipos de datos primitivos:
// string, number, bigint, boolean, undefined, null, symbol
// y un tipo de dato no primitivo: object

// string
const userName = "John Doe";

// number
const age = 30;

// bigint
const bigNumber = 9007199254740991n;

// boolean
const isStudent = true;

// undefined
let x;
console.log(x); // undefined

// null
const y = null;

// symbol
const sym = Symbol("foo");

// object
const person = {
    name: "Jane Doe",
    age: 25,
    isStudent: true
};

console.log(typeof userName); // string
console.log(typeof age); // number
console.log(typeof bigNumber); // bigint
console.log(typeof isStudent); // boolean
console.log(typeof x); // undefined
console.log(typeof y); // object
console.log(typeof sym); // symbol
console.log(typeof person); // object