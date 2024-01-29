// Reminder App
// • Create a reminder app
// • * There should be:
// • * An input for entering the title
// • * An input for entering priority (Low, medium, High)
// • * An input for color
// • * A textarea for adding a description
// • * A button for adding the reminder
// • * A button for showing all reminders
// • * When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// • * The object should then be added to an array of reminders
// • * When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// • * The title should be the color of the "color" property

let titleInput = document.getElementById("title");
let priorityInput = document.getElementById("priority");
let colorInput = document.getElementById("color");
let descriptionInput = document.getElementById("description");
let addReminderBtn = document.getElementById("addReminder");
let showAllBtn = document.getElementById("showAll");
let remindersArr = [];

function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}

addReminderBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let title = titleInput.value;
    let priority = priorityInput.value;
    let color = colorInput.value;
    let description = descriptionInput.value;
    if (title === "") {
        alert("Please insert Title!");
        return;
    } 
    if (description === "") {
        alert("Please insert Description!");
        return;
    } 

    let reminder = new Reminder(title, priority, color, description);
    remindersArr.push(reminder);
    document.getElementById("form").reset();
})

showAllBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let tableItem = document.getElementById("tableDiv");
    let newTable = `
    <table border="1px">
        <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Description</th>
        </tr>`;
    for(let reminder of remindersArr) { 
        newTable += `   
        <tr>
            <td bgcolor="${reminder.color}">${reminder.title}</td>
            <td>${reminder.priority}</td>
            <td>${reminder.description}</td>
        </tr>`;
    } 
    newTable += `</table>`;
    tableItem.innerHTML = newTable;
})