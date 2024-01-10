// Write a JavaScript programm called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering an appropriate values in the fields!

// Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object (literal or construcotr function its up to you) and add it to an array!

let myButton = document.getElementById("save");

myButton.addEventListener("click", function() {
    let person = {
        firstName: document.getElementById("fName").value,
        lastName: document.getElementById("lName").value,
        phoneNumber: parseInt(document.getElementById("pNumber").value),
    }

    if (person.firstName === "" || person.lastName === ""){
        alert("Please enter First name and Last name!");
        return false;
    }

    if (isNaN(person.phoneNumber) || person.phoneNumber.toString().length!==9) {
        alert("Please enter a valid phone number!");
        return false;
    }   

    let table = `<tr>`;
    table += `<td>${person.firstName}</td>`;
    table += `<td>${person.lastName}</td>`;
    table += `<td>${person.phoneNumber}</td>`;
    table += `<td><input type="button" value="Edit" id="edit" name="edit" onclick="editContact(this)" /></td>`;
    table += `<td><input type="button" value="Delete" onclick="deleteContact(this)" name="delete" /></td>`;
    table += `</tr>`;

    document.getElementById("table").innerHTML += table;

    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("pNumber").value = "";
    
})

function deleteContact(element) {
    element.parentElement.parentElement.remove();
}

function editContact(element) {
    let el = element.parentElement.parentElement.getElementsByTagName("td");
    document.getElementById("fName").value = el[0].innerText;
    document.getElementById("lName").value = el[1].innerText;
    document.getElementById("pNumber").value = el[2].innerText;
    deleteContact(element);
}