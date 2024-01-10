// Make a TODO app for yourself. You should have only one input and “Add” button. After clicking on the Add button, display the newly added task that you need to do in an unordered list. Each new todo should be saved into an array.
// Bonus: Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross trough the text! Try making the ToDo an object that needs to have two properties: Name and isCompleted properties

let newArray = [];
let myButton = document.getElementById("addButton");

myButton.addEventListener("click", function() {
    let listElement = "";
    let toDoInput = document.getElementById("toDo").value;
    if (toDoInput === "") {
        alert("Please enter input!");
        return false;
    }
    let toDoObj = {
        name: toDoInput,
        isCompleted: false,
    }
    newArray.push(toDoObj);
    for (i=0; i<newArray.length; i++) {
        listElement += `<li><input type="checkbox" onChange="checkboxFunction(this,${i})" />${newArray[i].name}</li>`;
    }
    document.getElementById("listToDo").innerHTML = listElement;
    listElement = "";
    document.getElementById("toDo").value = "";
});

function checkboxFunction(element, counter) {
    console.log(counter);
    if (newArray[counter].isCompleted === true) {
        element.parentElement.style.textDecoration="none";  
        newArray[counter].isCompleted = false;  
    } else {
    element.parentElement.style.textDecoration="line-through";
    newArray[counter].isCompleted = true;
    }
}