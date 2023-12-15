let number1 = parseInt(prompt("Please enter first number:"));
let number2 = parseInt(prompt("Please enter second number:"));

function sum(number1, number2) {
    let result = number1 + number2;
    return result;
}

function subtract(number1, number2) {
    let result = number1 - number2;
    return result;
}

function multiply(number1, number2) {
    let result = number1 * number2;
    return result;
}

function divide(number1, number2) {
    let result = number1 / number2;
    return result;
}

console.log(`${number1} + ${number2} = ` + sum(number1,number2));
console.log(`${number1} - ${number2} = ` + subtract(number1,number2));
console.log(`${number1} * ${number2} = ` + multiply(number1,number2));
console.log(`${number1} / ${number2} = ` + divide(number1,number2));