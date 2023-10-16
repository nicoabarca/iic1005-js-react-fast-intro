// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling 

// Ejemplo de bloque de código y control de flujo en JavaScript

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log("num1 es mayor que num2");
} else if (num1 < num2) {
    console.log("num2 es mayor que num1");
} else {
    console.log("num1 y num2 son iguales");
}

let day = "lunes";
switch (day) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miércoles":
        console.log("Hoy es miércoles");
        break;
    default:
        console.log("Hoy no es lunes, martes ni miércoles");
        break;
}

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"