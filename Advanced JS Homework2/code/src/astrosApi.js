// Create a button When the button is clicked, call the Astros api to get astronauts Print them in unordered list.

// URL: http://api.open-notify.org/astros.json 

let getAstronautsBtn = document.getElementById("getAstronautsBtn");
let myList = document.getElementById("myList");

getAstronautsBtn.addEventListener("click", function(event) {
    event.preventDefault();

    fetch("http://api.open-notify.org/astros.json")
    .then(function(response) {
        response.json()
        .then(function(data) {
            printAstros(data);
        })
        .catch(function(error){
            console.log(`Error: ${error}`);
        })

    })
    .catch(function(responseError) {
        console.log(`Error: ${responseError}`);
    })
})

function printAstros(responseData) {
    myList.innerHTML = "";
    for (let astros of responseData.people) {
        myList.innerHTML += `<li>Name: ${astros.name}, Craft: ${astros.craft}</li>`;
    }
}