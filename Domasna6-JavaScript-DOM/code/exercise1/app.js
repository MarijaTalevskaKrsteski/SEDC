// MANIPULATE THE DOM

// Select the first div
let firstDiv = document.querySelector("div");

// Select all paragraphs
let paragraphs = document.getElementsByTagName("p");

// Select the last div
let allDivs = document.getElementsByTagName("div");
let lastDiv = allDivs[allDivs.length-1];
//resenieto od prezentacijata ne mi e soodvetno zatoa sto ne mora div sekogas da e posleden element vo body
//let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;

// Select the header 3 in the last div
let header3 = lastDiv.querySelector("h3");

// Select the header 1 in the last div
let header1 = lastDiv.querySelector("h1");

// Get the text from the first paragraph in the second div
let secondDiv = allDivs[1];
let firstParagraph = secondDiv.querySelector("p").innerText;

// Add the word "text" to the text element in the second div
let textElement = secondDiv.querySelector("text");
textElement.innerText += " text";

// Change the text of the header 1 in the last div
header1.innerText = "This text is changed in h1.";

// Change the text of the header 3 in the last div
header3.innerText = "This text is also changed in h3.";

// Note:You can't change the HTML