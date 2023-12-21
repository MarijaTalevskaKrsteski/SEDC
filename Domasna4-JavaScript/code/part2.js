let mamal = prompt("Are you calculating Dog or Human years?");
let humanDog = mamal.toLowerCase();
let age = prompt("Enter the years:");
let years = parseInt(age);

function convertYears(years, humanDog) {
    if(humanDog !== "dog" && humanDog !== "human") {
        console.log("Invalid input. Please choose Dog or Human.");
        return false;
    }
    if (isNaN(years)) {
        console.log("Invalid input for Years. It must be a number.");
        return false;
    }
    if(humanDog === "dog") {
        let d = years * 7;
        return d;
    } else {
        let h = years / 7;
        return h;
    }
}

let resultFunction = convertYears(years,humanDog);

if(resultFunction !== false)
    console.log(`The age of the ${humanDog} is ${years} years, converted in human/dog's years are: ${resultFunction} years old.`);