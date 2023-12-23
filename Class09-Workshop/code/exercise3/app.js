// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.
// Make sure you use a function!
// Ex. Input: 20 ==> Output: 14

let item1 = prompt("Enter a number: ");
let item2 = 13;
function greaterThan(x,y) {
    let differenceNum = x-y;
    if(differenceNum>0) {
        differenceNum = differenceNum*2;
    }
    return differenceNum;
}
let functionResult = greaterThan(item1,item2);
console.log(functionResult);