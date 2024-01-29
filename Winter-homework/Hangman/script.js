//Create a web page that will allow the user to play the hangman game against the computer.

//The rules of hangman are this:

//////We have to guess a word by guessing individual letters. We have a set number of lives and lose a life each time we make a wrong guess.
//It's a game where the unknown word is displayed as dashes, with letters fill in as we guess them.

//Thinking about this programmatically, we can see that the state of the game at any time can be represented through the use of a limited number of variables and operations on these variables.

//////At the start of the game we choose a word to be guessed. The word will be a random choice from the program out of a many options that are saved in the game. You can choose certain topic e.q. movies / TV shows.

//////We also have a number of lives, which is the total number of wrong guesses we are allowed. You set this in advance (it usually is 6 – for each part of the hangman itself (head, body, 2 arms, 2 legs). You lose a life when you have a wrong guess.

//////Finally, we have our guesses, the letters that we have guessed so far. Dashes are replaced with the guessed letters.

//////The game has three possible states - Victory (all letters guessed), Death (no more lives left) or Still Playing. All of these can be figured out using the above three variables.

//It's worth emphasizing that the lives, or maximum number of wrong guesses, and the word are set at the start of the game. The only thing that changes throughout the course of a game is the guessed letters, and everything else follows on from that.

//BONUS: A sketch of the scaffold is added to each time there's a wrong guess. If the sketch is completed before we complete the game, then we lose!

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let movies = ["Oppenheimer", "The Godfather", "The Dark Knight", "The Shawshank Redemption", "Barbie", "The Man From Earth"];
let moviesClues = ["Biopic on atomic scientist.", "Mafia family epic.", "Batman battles Joker.", "Prison escape drama.", "Animated doll adventure.", "Immortality revelation."];
let randomMovie = movies[Math.floor(Math.random() * movies.length)];
let guessedLetters = [];
let uniqueLetters = [];
let lives = 10;
let guessed = 0;
let gameStatus = "Still Playing";
let hintBtn = document.getElementById("hint");
let canvas = document.getElementById("drawing");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.fillRect(0, 108, 60, 2);
ctx.fillRect(30, 10, 2, 100);
ctx.fillRect(30, 10, 60, 2);

function drawHangman() {
    switch(lives) {
        case 9:
            ctx.fillRect(90, 10, 2, 10); //hang
            break;
        case 8:
            ctx.beginPath(); //head
            ctx.arc(91, 31, 10, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 7:
            ctx.fillRect(90, 42, 2, 40); //telo3
            break;
        case 6:
            //left hand
            ctx.moveTo(91, 50);
            ctx.lineTo(71, 60);
            ctx.stroke();
            break;
        case 5:
            //right hand
            ctx.moveTo(91, 50);
            ctx.lineTo(111, 60);
            ctx.stroke();
            break;
        case 4:
            //left leg
            ctx.moveTo(91, 80);
            ctx.lineTo(71, 105);
            ctx.stroke();
            break;
        case 3:
            //right leg
            ctx.moveTo(91, 80);
            ctx.lineTo(111, 105);
            ctx.stroke();
            break;
        case 2:
            //left eye
            ctx.moveTo(85, 31);
            ctx.lineTo(89, 26);
            ctx.stroke();
            ctx.moveTo(89, 31);
            ctx.lineTo(85, 26);
            ctx.stroke();
            break;
        case 1:
            //right eye
            ctx.moveTo(93, 31);
            ctx.lineTo(97, 26);
            ctx.stroke();
            ctx.moveTo(97, 31);
            ctx.lineTo(93, 26);
            ctx.stroke();
            break;
        case 0:
            ctx.fillRect(87, 35, 7, 2); //mouth
            break;
    }
}

for (let letter of randomMovie) {
    if (uniqueLetters.indexOf(letter.toLowerCase()) < 0 && letter != " ")
        uniqueLetters.push(letter.toLowerCase());
}

for (let buttonLetter of alphabet) {
    let btnElement = document.createElement("button");
    btnElement.innerText = buttonLetter;
    btnElement.id = "letter-" + buttonLetter;
    btnElement.className = "alphabetBtn";
    document.getElementById("buttonsAlphabet").appendChild(btnElement);

    let myBtn = document.getElementById("letter-" + buttonLetter);
    myBtn.addEventListener("click", function (event) {
        if (gameStatus != "Still Playing") {
            return;
        }

        let letter = event.target.innerText
        event.target.disabled = "disabled";
        guessedLetters.push(letter);
        if (randomMovie.toLowerCase().indexOf(letter) < 0) {
            lives--;
            document.getElementById("lives").innerText = `You have ${lives} lives`;
            drawHangman();
        } else {
            guessed++;
        }
        if (lives < 1) {
            gameStatus = "Death";
            document.getElementById("lives").innerHTML = `<h3 id="lives" style='color: red;'>You lost!</h3>`;
        }

        if (guessed === uniqueLetters.length) {
            gameStatus = "Victory";
            document.getElementById("lives").innerHTML = `<h3 id="lives" style='color: green;'>You won!</h3>`;
        }

        printRandomMovie();
    });
}

function printRandomMovie() {
    let hiddenWord = "";
    for (let letter of randomMovie) {
        if (letter === " ") {
            hiddenWord += `&nbsp`;
        } else {
            if (guessedLetters.indexOf(letter.toLowerCase()) >= 0)
                hiddenWord += letter + "&nbsp";
            else
                hiddenWord += "_&nbsp";
        }
    }
    document.getElementById("guessTheFilm").innerHTML = hiddenWord;
}
printRandomMovie();

hintBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let indexOfRandomMovie = movies.indexOf(randomMovie);
    document.getElementById("clue").innerText = `Clue - ${moviesClues[indexOfRandomMovie]}`;
});