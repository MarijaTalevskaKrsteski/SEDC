// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs

let myButton = document.getElementById("submit");

myButton.addEventListener("click", function() {
    let nameAnimal = document.getElementById("name").value;
    let kindAnimal = document.getElementById("kind").value;
    let speakAnimal = document.getElementById("speak").value;

    if ((nameAnimal || kindAnimal || speakAnimal) === "") {
        alert("Please insert data in the text box!");
        return false; 
    }

    let animal = {
        name: nameAnimal,
        kind: kindAnimal,
        speak: function(message) {
            console.log(`${this.kind} says: ${message}`);
        }
    }

    animal.speak(speakAnimal);
})