// Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!
// Make sure you use a function!
// Ex. Input1: 20
// Input2: 80
// Output: 80 is closer to 100

let num1 = prompt("Insert number 1: ");
let num2 = prompt("Insert number 2: ");

function closerTo100(num1,num2) {
    if(num1<0 || num2<0) {
        alert("Negative number!");
        return false;
    }
    x = Math.abs(num1-100);
    y = Math.abs(num2-100);
    if(x > y) {
        alert(`${num2} is closer to 100`);
    } else if(x < y) {
        alert(`${num1} is closer to 100`);
    } else
        alert(`${num1} and ${num2} are same`);
}

closerTo100(num1,num2);