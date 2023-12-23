// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];

function fullName(firstNameArray, lastNameArray) {
    let fullNameArray = [];
    for(i=0; i<firstNameArray.length; i++){
        fullNameArray.push((i+1) + ". " + firstNameArray[i] + " " + lastNameArray[i]);
    }
    return fullNameArray;
}

let resultArray = fullName(firstNames, lastNames);
console.log(resultArray);