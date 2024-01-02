// Print all numbers from an array and the sum
// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numArray = [2, 4, 6, 3, 5, 7];

let myDiv = document.getElementById("myDiv");

function printArray(elementsArray, element) {
    element.innerHTML = ""; 
    element.innerHTML += "<ul>";
    let sumArray = 0;
    for(i=0; i<elementsArray.length; i++) {
        element.innerHTML += `<li>${elementsArray[i]}</li>`;
        sumArray += elementsArray[i];
    }
    element.innerHTML += "</ul>";
    let sumString = elementsArray.join(' + ');
    element.innerHTML += `The sum of all the numbers is: ${sumString} = ${sumArray}`;    
}
printArray(numArray, myDiv);