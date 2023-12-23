// Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.

let elementsArray = [null, "Marija", 2023, 4, undefined, NaN, "", 15, 9, false];
function falsyValues(falsyArray) {
    let newArray = [];
    for(i=0; i<falsyArray.length; i++) {
        if(falsyArray[i]) {
            newArray.push(falsyArray[i]);
        }
    }
    return newArray;
}
let functionResult = falsyValues(elementsArray);
console.log(functionResult);