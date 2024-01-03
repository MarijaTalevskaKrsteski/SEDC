// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)

let myButton = document.getElementById("createTable");

myButton.addEventListener("click", function() {
    let inputRow = document.getElementById("row").value;
    let inputColumn = document.getElementById("column").value;
    if(inputRow<1 || inputColumn<1) {
        alert("Please enter a number bigger than zero!");
        return false;
    }
    for(i=0; i<inputRow; i++) {
        let printTable = "";
        printTable += `<table border=2>`;
        printTable += `<tr>`;
            for(j=0; j<inputColumn; j++) {
                printTable += `<td>Row-${i+1} Column-${j+1}</td>`;		
            }
        printTable += `</tr>`;
        printTable += `</table>`;
        document.getElementsByTagName("body")[0].innerHTML += printTable;
    }
})