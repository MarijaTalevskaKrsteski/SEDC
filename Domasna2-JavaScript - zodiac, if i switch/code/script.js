let year = parseInt(prompt("Pleasea enter your year of birth:"));
console.log(`Your birth year is ${year}`);
let zodiac = (year-4)%12;
console.log(`Your Chinese Zodiac number is ${zodiac}`);

console.log("====IF====");
if (zodiac === 0) {
    console.log(`Your Chinese Zodiac Year is Rat`);
} else if (zodiac === 1) {
    console.log(`Your Chinese Zodiac Year is Ox`);
} else if (zodiac === 2) {
    console.log(`Your Chinese Zodiac Year is Tiger`);
} else if (zodiac === 3) {
    console.log(`Your Chinese Zodiac Year is Rabbit`);
} else if (zodiac === 4) {
    console.log(`Your Chinese Zodiac Year is Dragon`);
} else if (zodiac === 5) {
    console.log(`Your Chinese Zodiac Year is Snake`);
} else if (zodiac === 6) {
    console.log(`Your Chinese Zodiac Year is Horse`);
} else if (zodiac === 7) {
    console.log(`Your Chinese Zodiac Year is Goat`);
} else if (zodiac === 8) {
    console.log(`Your Chinese Zodiac Year is Monkey`);
} else if (zodiac === 9) {
    console.log(`Your Chinese Zodiac Year is Rooster`);
} else if (zodiac === 10) {
    console.log(`Your Chinese Zodiac Year is Dog`);
}  else if (zodiac === 11) {
    console.log(`Your Chinese Zodiac Year is Pig`);
} else {
    console.log("You didn't enter a valid year.");
}

console.log("====SWITCH====");
switch(zodiac) {
    case 0:
        console.log(`Your Chinese Zodiac Year is Rat`);
        break;
    case 1:
        console.log(`Your Chinese Zodiac Year is Ox`);
        break;
    case 2:
        console.log(`Your Chinese Zodiac Year is Tiger`);
        break;
    case 3:
        console.log(`Your Chinese Zodiac Year is Rabbit`);
        break;
    case 4:
        console.log(`Your Chinese Zodiac Year is Dragon`);
        break;
    case 5:
        console.log(`Your Chinese Zodiac Year is Snake`);
        break;
    case 6:
        console.log(`Your Chinese Zodiac Year is Horse`);
        break;
    case 7:
        console.log(`Your Chinese Zodiac Year is Goat`);
        break;
    case 8:
        console.log(`Your Chinese Zodiac Year is Monkey`);
        break;
    case 9:
        console.log(`Your Chinese Zodiac Year is Rooster`);
        break;
    case 10:
        console.log(`Your Chinese Zodiac Year is Dog`);
        break;
    case 11:
        console.log(`Your Chinese Zodiac Year is Pig`);
        break;
    default:
        console.log("You didn't enter a valid year.");
        break;
}