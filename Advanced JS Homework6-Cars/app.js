// Basic
// Place the JSON cars.json to your GitHub repository. Use the fetch method to get the data from the server. Display the cars data in a table.

// Medium
// Add inputs to filter the data:
// By type (input type: select)
// By brand (input type: select)
// Add a search button. When clicked the table should be filtered by the selected filters.

// Advanced
// Add these additional inputs:
// By model (input type: text input)
// By doors (input type: number input)
// By gasType (input type: select)
// By color (input type: text OR select)
// By new/old (input type: radio or checkbox) - you are free to choose the input type and the way you want to display the data (just new, just old, both, etc.)
// By horsepower (input type: number, range input) - you are free to choose the input type and the way you want to display the data (exact value, up to value, etc.)
// Make sure all filters are working together. When a filter is selected, it should be considered in the filtering process.
// Example: if I select BMW from the brand filter, the table should be filtered by the selected brand. If I select BMW and color white, the table should be filtered by the selected brand and color.

async function getData(){
    try{
        let response = await fetch("https://raw.githubusercontent.com/MarijaTalevskaKrsteski/SEDC/main/Advanced%20JS%20Homework6-Cars/cars.json");
        let parsedObjects = await response.json();

        let filterType = document.getElementById("filterType").value;
        let filterBrand = document.getElementById("filterBrand").value;
        let filterModel = document.getElementById("model").value;
        let filterDoors = document.getElementById("doors").value;
        let filterGasType = document.getElementById("gasType").value;
        let filterColor = document.getElementById("color").value;
        let filterIsNew = document.querySelector('input[name="is_new"]:checked').value;
        let filterHorsepower = document.getElementById("horsepower").value;

        if(filterType != "all")
            parsedObjects = parsedObjects.filter(car => car.type == filterType);
        if(filterBrand != "all")
            parsedObjects = parsedObjects.filter(car => car.brand == filterBrand);
        if(filterModel != "")
            parsedObjects = parsedObjects.filter(car => car.model == filterModel);
        if(filterDoors != "")
            parsedObjects = parsedObjects.filter(car => car.doors == filterDoors);
        if(filterGasType != "all")
            parsedObjects = parsedObjects.filter(car => car.gasType == filterGasType);
        if(filterColor != "all")
            parsedObjects = parsedObjects.filter(car => car.color == filterColor);
        if(filterIsNew != "all") {
            if(filterIsNew == "true")
                parsedObjects = parsedObjects.filter(car => car.isNew == true); 
            else
                parsedObjects = parsedObjects.filter(car => car.isNew == false);  
        }
                      
        if(filterHorsepower != "")
            parsedObjects = parsedObjects.filter(car => car.horsepower == filterHorsepower);

        let tableBody = "";
        parsedObjects.forEach(car => tableBody += `<tr>
            <td>${car.type}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.doors}</td>
            <td>${car.gasType}</td>
            <td>${car.color}</td>
            <td>${car.isNew}</td>
            <td>${car.horsepower}</td>
        </tr>`);
        document.getElementById("tableBody").innerHTML = tableBody;
    }
    catch(error){
        console.log("An error ocurred: " + error);
    }
}
getData();

let filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", function(event) {
    event.preventDefault();
    getData();
})