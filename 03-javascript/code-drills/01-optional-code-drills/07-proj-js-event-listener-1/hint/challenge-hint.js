// declare the variable we're storing the confirm dialogue in
var cellPhone;

// create a key press listener
document.onkeyup = function(input) {

  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive
  var userKey = input.key.toLowerCase()

  // console log the key that the user pressed
  console.log(userKey)

  // check whether the user pressed the "h" key
  if (userKey === "h") { 

    // create a confirm dialogue when they do and store the response from that
    // dialogue into the variable we declared outside the event listener
    cellPhone = confirm("Is that the key you want?")
  }

  // check whether the user pressed the "k" key
  if (userKey === "k") { 
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue
    if (cellPhone === true) { 
      alert("Just so you know, that's the k key")
    } else {
      alert("Keep up the good work")
    }
  }
}