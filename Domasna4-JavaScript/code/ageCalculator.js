let currentYear = new Date().getFullYear();
let year = prompt("What is your year of birth: ");
let birthYear = parseInt(year);

function age(currentYear, birthYear) {
    result = currentYear - birthYear;
    return result;
}

console.log(`Now is ${currentYear}, you were born in ${birthYear}. You are ${age(currentYear, birthYear)} years old.`);