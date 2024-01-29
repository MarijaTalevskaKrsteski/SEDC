// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:
// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.
// **API URL: ** https://swapi.dev/api/planets/?page=2

let tablePlanets = document.getElementById("myTable");
let resultsBtn = document.getElementById("showResults");
let next10Btn = document.getElementById("next10");
let previous10sBtn = document.getElementById("previous10");
next10Btn.hidden = true;
previous10sBtn.hidden = true;

resultsBtn.addEventListener("click", function() {
    makeCall("https://swapi.dev/api/planets/?page=1");
    resultsBtn.hidden = true;
    next10Btn.hidden = false;
})

next10Btn.addEventListener("click", function() {
    makeCall("https://swapi.dev/api/planets/?page=2");   
    next10Btn.hidden = true;
    previous10sBtn.hidden = false;
})

previous10sBtn.addEventListener("click", function() {
    makeCall("https://swapi.dev/api/planets/?page=1");  
    next10Btn.hidden = false;
    previous10sBtn.hidden = true;
})

function makeCall(planetsUrl) {
    tablePlanets.lastElementChild.innerHTML = "";
    fetch(planetsUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            printPlanets(data);
        })
        .catch(function(error) {
            console.log(`Error: ${error}`);
        })
    })
    .catch(function(responseError) {
        console.log(`Error: ${responseError}`);
    })
}

function printPlanets(responseData) {
    console.log(responseData);
    for(let planet of responseData.results) {
        tablePlanets.lastElementChild.innerHTML += `<tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td></tr>`;
    }
}