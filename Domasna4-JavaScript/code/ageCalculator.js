let currentYear = new Date().getFullYear();
let year = prompt("What is your year of birth: ");
let birthYear = parseInt(year);

function age(currentYear, birthYear) {
    if (isNaN(birthYear)) {
        console.log("Invalid input for birth year. It must be a number.");
        return false;
    }
    result = currentYear - birthYear;
    return result;
}

let resultFunction = age(currentYear, birthYear);
if (resultFunction !== false) {
    console.log(`Now is ${currentYear}, you were born in ${birthYear}. You are ${age(currentYear, birthYear)} years old.`);
}
