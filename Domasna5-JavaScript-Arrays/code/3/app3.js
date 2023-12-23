// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];

function bigString(bigStringArray) {
    let result = "";
    for(i=0; i<bigStringArray.length; i++) {
        result += bigStringArray[i] + " ";
    }
    return result;    
}

let functionResult = bigString(stringArray);
console.log(functionResult);