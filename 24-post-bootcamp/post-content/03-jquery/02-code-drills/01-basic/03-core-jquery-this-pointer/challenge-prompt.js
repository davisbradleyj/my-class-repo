// `this` jQuery Business

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here
  var helloButton = $("<button>");
  helloButton.text("Hello");
  helloButton.attr("data","Hello")
  var worldButton = $("<button>");
  worldButton.text("World");
  worldButton.attr("data","World")
  var clearButton = $("<button>");
  clearButton.text("Clear");
  clearButton.attr("data","Clear")
  var userButton = $("<button>");
  userButton.text("User");
  userButton.attr("id","user-button")
  userButton.attr("data","")
  $("#buttons-area").append(helloButton,worldButton,clearButton)
  $("#user-button-area").append(userButton)

  // End of your code area
}

// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we defined above.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  document.onkeyup = function(event) {
    // Your code goes here

    var userEvent = $("#user-button").attr("data");
    userEvent += event.key;
    $("#user-button").attr("data", userEvent)

    // End of your code area
  }

  // On click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here
    switch ($(this).attr("data")){
      case "Hello":
        // $("#output").append($(this).attr("data"));
        // break;
      case "World":
        $("#output").append($(this).attr("data"));
        break;
      case "Clear":
        $("#output").empty();
        break;
      default:
        $("#output").append($(this).attr("data"));
        $(this).attr("data","")        
    }
    // End of your code area
  })

})
