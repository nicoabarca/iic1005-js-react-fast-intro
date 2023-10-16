// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators

// Operadores aritméticos 
let x = 10;
let y = 5;
let sum = x + y; // adición
let difference = x - y; // substracción
let product = x * y; // multiplicación
let quotient = x / y; // división
let remainder = x % y; // módulo
let exponentiation = x ** y; // exponente

// Operadores de asignación
let a = 10;
a += 5; // equivalente a = a + 5;
a -= 3; // equivalente a = a - 3;
a *= 2; // equivalente a = a * 2;
a /= 4; // equivalente a = a / 4;
a %= 3; // equivalente a = a % 3;
a **= 2; // equivalente a = a ** 2;

// Operadores de comparación 
// IMPORTANTE: siempre al hacer comparación de igualdad entre valores ocupar === o !==
let b = 5;
let c = "5";
let isEqual = b == c; // igualdad floja, true
let isStrictlyEqual = b === c; // igualdad estricta, false
let isNotEqual = b != c; // igualdad floja, false
let isNotStrictlyEqual = b !== c; // inigualdad estricta, true
let isGreaterThan = b > 3; // mayor que, true
let isLessThan = b < 10; // menor que, true
let isGreaterOrEqualThan = b >= 5; // mayor o igual que , true
let isLessOrEqualThan = b <= 5; // menor o igual que, true

// Operadores lógicos 
let d = true;
let e = false;
let logicalAnd = d && e; // AND lógico, false
let logicalOr = d || e; // OR lógico, true
let logicalNot = !d; // NOT lógico, false

// Operadores binarios (bitwise)
let f = 5; // 101 in binary
let g = 3; // 011 in binary
let bitAnd = f & g; // bitwise AND, 001 (1 in decimal)
let bitOr = f | g; // bitwise OR, 111 (7 in decimal)
let bitXor = f ^ g; // bitwise XOR, 110 (6 in decimal)
let bitNot = ~f; // bitwise NOT, -6 (in decimal)
let leftShift = f << 1; // left shift, 1010 (10 in decimal)
let rightShift = f >> 1; // right shift, 10 (2 in decimal)
let zeroFillRightShift = f >>> 1; // zero-fill right shift, 10 (2 in decimal)