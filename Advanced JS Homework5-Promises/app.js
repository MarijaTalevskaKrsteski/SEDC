// Task 1
// Use the https://jsonplaceholder.typicode.com/todos.
// First, get the todo with id 1 (https://jsonplaceholder.typicode.com/todos/1).
// Then, log the todo from the response

// Task 2 *Bonus
// Use the https://jsonplaceholder.typicode.com/api.
// First, get the todo with id 1 (https://jsonplaceholder.typicode.com/todos).
// Then, log the todo from the response, then use the userId from the response and get the details for that user (https://jsonplaceholder.typicode.com/users/[userId])
// Log the details for the user

async function getToDo() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let parsedObject = await response.json();
        console.log(parsedObject);
        console.log(parsedObject.id);
        try {
            response = await fetch(`https://jsonplaceholder.typicode.com/users/${parsedObject.id}`);
            parsedObject = await response.json();
            console.log(parsedObject);
        }
        catch(error) {
            console.log("An error ocured" + error);
        }
    }
    catch(error) {
        console.log("An error ocured" + error);
    }
}
getToDo();