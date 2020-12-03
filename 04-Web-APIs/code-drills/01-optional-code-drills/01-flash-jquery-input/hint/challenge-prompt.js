// Day 01
// Activity 01


// wait for the DOM to finish loading (document.ready)
$(function () {

  // Create a click listener for the submit button
  $(document).on("click","button",function(event) {
    // stop the default behavior of the submit button
    event.preventDefault();

    // pull the values off the user input form and store them in seperate variables
    let firstName = $("#firstName").val();
    let lasttName = $("#lastName").val();
    let job = $("#job").val();
    let city = $("#city").val();
    let state = $("#state").val();
    
    // clear the form after we're done storing the values
  
   $("#firstName").val("");
    $("#lastName").val("");
    $("#job").val("");
    $("#city").val("");
    $("#state").val("");
    
    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs

    let nameDiv = $("<h4>").text(firstName + ' ' + lasttName);
    let jobDiv = $("<h5>").text(job);
    let locDiv = $("<h5>").text(city + ', ' + state);
    
    // empty the display area and display the divs we just created in the display area
    $('#display').empty();
    $("#display").append(nameDiv, jobDiv, locDiv);
  })
})
