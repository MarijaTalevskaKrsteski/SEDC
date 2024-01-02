// WEIGHT CALCULATOR IN CHICKENS
// Want to know how you wiegh in chikens? No problem!

// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph

let weightKg = parseInt(prompt("What is your weight in kg: "));
if(isNaN(weightKg))
    alert("Please enter a number!");

function weightInChickens(weight) {
    return weight / 0.5;
}

let resultFunction = weightInChickens(weightKg);

let htmlResult = document.getElementById("result");
htmlResult.innerText += ` You weigh ${resultFunction} in chickens!`;