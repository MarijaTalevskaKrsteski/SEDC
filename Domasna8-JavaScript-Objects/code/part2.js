// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

let myButton = document.getElementById("submit");

myButton.addEventListener("click", function() {
    let titleBook = document.getElementById("title").value;
    let authorBook = document.getElementById("author").value;
    let statusBook = document.getElementById("status").value;

    if ((titleBook || authorBook) === "") {
        alert("Please insert data in the text box!");
        return false; 
    }

    let book = {
        title: titleBook,
        author: authorBook,
        readingStatus: statusBook,
        info: function() {
          if (this.readingStatus === "read") {
            console.log(`Already ${this.readingStatus} '${this.title}' by ${this.author}`);
            return true;
        } else {
            console.log(`You still need ${this.readingStatus} '${this.title}' by ${this.author}`);
            return false; }
        }
    }
    book.info();
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
})