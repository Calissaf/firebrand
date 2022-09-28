// traditional function
function subtraction(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

// arrow function

const subtractionArrow = (numberOne, numberTwo) => numberOne - numberTwo;

console.log(subtractionArrow(5, 2));
// Arrow function syntax: const *function_name* = (parameters) => return;

// self challenge: convert birthday func from traditional to arrow syntax
let myAge = 23;

function birthday() {
    console.log("It is your birthday.");
    myAge++;
}

const birthdayArrow = () => myAge++; console.log("It is your birthday.");

birthdayArrow();

console.log(myAge);