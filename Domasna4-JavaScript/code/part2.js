let humanDog = prompt("Are you calculating Dog or Human years?");
let age = prompt("Enter the years:");
let years = parseInt(age);

function convertYears(years, humanDog) {
    if(humanDog !== "Dog" && humanDog !== "Human") {
        console.log("Invalid input. Please choose Dog or Human.");
        return false;
    }
    if (isNaN(years)) {
        console.log("Invalid input for Years. It must be a number.");
        return false;
    }
    if(humanDog === "Dog") {
        let d = years * 7;
        return d;
    } else {
        let h = years / 7;
        return h;
    }
}

let f = convertYears(years,humanDog);

if(f !== false)
    console.log(`The age of the ${humanDog} is ${years} years, converted in human/dog's years are: ${f} years old.`);