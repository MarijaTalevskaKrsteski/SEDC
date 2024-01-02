// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)



// let recipeNamePrompt = prompt("What is the name of the recipe: ");
// let numOfIngredientsPrompt = parseInt(prompt(`How many ingredients does the ${recipeNamePrompt} has: `));
// if(isNaN(numOfIngredientsPrompt))
//     alert("Please insert a number!");
// else
//     recipeFunction(recipeNamePrompt, numOfIngredientsPrompt);

// function recipeFunction(recipeName, numOfIngredients) {
//     let recipeDiv = document.getElementById("recipe");
//     let headerName = document.querySelector("h2");
//     headerName.innerText += ` ${recipeName}`;
//     recipeDiv.innerHTML += "<ul>";

//     for(let numOfIngredient=1; numOfIngredient <= numOfIngredients; numOfIngredient++) {
//         let nameOfIngredient = prompt(`What is the name of the no.${numOfIngredient} ingredient: `);
//         recipeDiv.innerHTML += `<li>No.${numOfIngredient} ingredient is: ${nameOfIngredient}</li>`;
//     }
//     recipeDiv.innerHTML += "</ul>";
// }



// let recipeName = prompt("What is the name of the recipe: ");
// let numOfIngredients = parseInt(prompt(`How many ingredients does the ${recipeName} has: `));
// if(isNaN(numOfIngredients))
//     alert("Please insert a number!");

// let recipeDiv = document.getElementById("recipe");

// recipeDiv.innerHTML += "<table border=10>";

// recipeDiv.innerHTML += `<caption><h2>Ingredients for: ${recipeName}</h2></caption>`;

// recipeDiv.innerHTML += "<tr>";
// recipeDiv.innerHTML += "<th>Number of ingredient</th>";
// recipeDiv.innerHTML += "<th>Name of ingredient</th>";
// recipeDiv.innerHTML += "</tr>";

// for(let numOfIngredient=1; numOfIngredient <= numOfIngredients; numOfIngredient++) {
//     let nameOfIngredient = prompt(`What is the name of the no.${numOfIngredient} ingredient: `);
//     recipeDiv.innerHTML += "<tr>";
//     recipeDiv.innerHTML += `<td>No.${numOfIngredient}</td>`;
//     recipeDiv.innerHTML += `<td>${nameOfIngredient}</td>`;
//     recipeDiv.innerHTML += "</tr>";
// }
// recipeDiv.innerHTML += "</table>";



let recipeName = prompt("What is the name of the recipe: ");
let numOfIngredients = parseInt(prompt(`How many ingredients does the ${recipeName} has: `));
if(isNaN(numOfIngredients))
    alert("Please insert a number!");

let recipeDiv = document.getElementById("recipe");
let content = "";
content += "<table border=10>";
content += `<caption><h2>Ingredients for: ${recipeName}</h2></caption>`;
content += "<tr>";
content += "<th>Number of ingredient</th>";
content += "<th>Name of ingredient</th>";
content += "</tr>";

for(let numOfIngredient=1; numOfIngredient <= numOfIngredients; numOfIngredient++) {
    let nameOfIngredient = prompt(`What is the name of the no.${numOfIngredient} ingredient: `);
    content += "<tr>";
    content += `<td>No.${numOfIngredient}</td>`;
    content += `<td>${nameOfIngredient}</td>`;
    content += "</tr>";
}

content += "</table>";
recipeDiv.innerHTML = content;