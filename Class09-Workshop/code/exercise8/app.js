// Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!
// ex: storyTeller(who, what, when);
// In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Example: Lancelot was a really strong knight in the middle age!")

let myButton = document.getElementById("submit");

myButton.addEventListener("click", function() {
    let who = document.getElementById("who").value;
    let what = document.getElementById("what").value;
    let when = document.getElementById("when").value;

    let story = storyTeller(who,what,when);

    document.getElementById("storyDiv").innerHTML += story;    
})

function storyTeller(who, what, when) {
    return `${who} was a really ${what} in the ${when}!`;
}