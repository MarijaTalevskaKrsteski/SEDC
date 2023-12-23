//Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert

let nameStory = prompt("Enter name:");
let moodStory = prompt("Enter mood:");
let activityStory = prompt("Enter activity:");
//default type is string

let storyArrayInput = [];
storyArrayInput.push(nameStory);
storyArrayInput.push(moodStory);
storyArrayInput.push(activityStory);

function tellStory(storyArray) {
    let story = `This is ${storyArray[0]}. ${storyArray[0]} is a nice person. Today they are ${storyArray[1]}. They are ${storyArray[2]} all day. The end.`;
    //let story = alert(`This is ${storyArray[0]}. ${storyArray[0]} is a nice person. Today they are ${storyArray[1]}. They are ${storyArray[2]} all day. The end.`);
    return story;
}

let resultStory = tellStory(storyArrayInput);
console.log(resultStory);