// Section 1 
// Set a variable of userTyped and set it to point at the element in the DOM with an id of "letterTyped"
let userTyped = document.getElementById("letterTyped");

// Set a variable of letterUsed and set it to point at the element in the DOM with an id of "lastLetter"
let letterUsed = document.getElementById("lastLetter");

// create a variable called LetterUsedArray and have it equal and empty array
let letterUsedArray = []

// Section 2
// now use the onkey up jquery function and pass it the argument of event
document.onkeyup = function (event) {
    // now set a variable of userInput equal to the event.key
    let userInput = event.key;
    
    // use the userTyped variable and the textContent property equal the userInput
    userTyped.textContent = userInput;
    
    // push the userInput into the letterUsedArray
    letterUsedArray.push(userTyped);
    
    // append the userInput followed by a comma to the end of the textContent within letterUsed
    letterUsed.textContent += userInput + ',';
    
}
