// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

let num1 = prompt("Enter item1: ");
let item1 = parseInt(num1);
let num2 = prompt("Enter item2: ");
let item2 = parseInt(num2);
let num3 = prompt("Enter item3: ");
let item3 = parseInt(num3);
let num4 = prompt("Enter item4: ");
let item4 = parseInt(num4);
let num5 = prompt("Enter item5: ");
let item5 = parseInt(num5);

let numArray = [];
numArray.push(item1);
numArray.push(item2);
numArray.push(item3);
numArray.push(item4);
numArray.push(item5);

function numbersArray(itemArray) {
    let sum = 0;
    for(i=0; i<itemArray.length; i++) {
        sum += itemArray[i];
    }
    return sum;
}

function validateNumber(validationArray) { 
    for(i=0; i<validationArray.length; i++) {
        if (isNaN(validationArray[i])) {
            console.log("Invalid input. It must be a number.");
            return false;
        }        
    }
    return true;
}

let resultValidation = validateNumber(numArray);

if (resultValidation !== false) {
    let resultNumbers = numbersArray(numArray);
    console.log(resultNumbers);
}

