// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

//Najdi gi site "p" izvrti gi i na site dodaj so += `${<br />} This is the new added text!`
//Najdi gi site "h1" i "h3" i na site dodaj so += ` This is the new added text!` OSVEN na h1[0]ot

let allParagraphs = document.getElementsByTagName("p");
function paragraphsText(paragraphsArray) {
    for(i=0; i<paragraphsArray.length; i++) {
        paragraphsArray[i].innerHTML += `<b style="color:blue"> This is the new added text in p! </b>`;
    }
}
paragraphsText(allParagraphs);

let allHeaders1 = document.getElementsByTagName("h1");
function header1Text(header1Array) {
    for(i=1; i<header1Array.length; i++) {
        header1Array[i].innerHTML += `<span style="color:blue">This is the new added text in h1!</span>`;
    }
}
header1Text(allHeaders1);

let allHeaders3 = document.getElementsByTagName("h3");
function header3Text(header3Array) {
    for(i=0; i<header3Array.length; i++) {
        header3Array[i].innerHTML += `<span style="color:blue">This is the new added text in h3!</span>`;
    }
}
header3Text(allHeaders3);