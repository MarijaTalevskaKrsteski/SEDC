// Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

// let maxMinArray = [3, 5, 6, 8, 11];

// function maxMinNumbers(numbersArray) {
//     let maxNumber = numbersArray[0];
//     let minNumber = numbersArray[0];
//     for(i=1; i<numbersArray.length; i++) {
//         if(maxNumber < numbersArray[i])
//             maxNumber = numbersArray[i];
//         if(minNumber > numbersArray[i])
//             minNumber = numbersArray[i];
//     }
//     console.log(`Max: ${maxNumber}, Min: ${minNumber}, Sum: ${maxNumber + minNumber}`);
// }

// maxMinNumbers(maxMinArray);

//BONUS
let maxMinArray = ["Marija", 3, 5, 6, 8, 11];

function maxMinNumbers(numbersArray) {
    let maxNumber;
    let minNumber;
    for(i=0; i<numbersArray.length; i++) {
        if(!isNaN(numbersArray[i])) {
            if(typeof maxNumber === "undefined") {
                maxNumber = numbersArray[i];
                minNumber = numbersArray[i];
            } else {
                if(maxNumber < numbersArray[i])
                    maxNumber = numbersArray[i];
                if(minNumber > numbersArray[i])
                    minNumber = numbersArray[i];
            }
        }
    }
    console.log(`Max: ${maxNumber}, Min: ${minNumber}, Sum: ${maxNumber + minNumber}`);
}

maxMinNumbers(maxMinArray);