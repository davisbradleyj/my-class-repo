// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBoGEXdXOvXRe0ZbFEURENlogdLyEXKisg",
  authDomain: "private-demo-161e2.firebaseapp.com",
  databaseURL: "https://private-demo-161e2.firebaseio.com",
  projectId: "private-demo-161e2",
  storageBucket: "",
  messagingSenderId: "231665465314",
  appId: "1:231665465314:web:e6ac03368bea13582e6bbb"
};
firebase.initializeApp(firebaseConfig);
// Create a variable to reference the database
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;

    // Change the HTML to reflect the stored values
    $("#highest-price").text(highPrice);
    $("#highest-bidder").text(highBidder);

    // Print the data to the console.
    console.log(highPrice);
    console.log(highBidder);
  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the stored values
    $("#highest-price").text(highPrice);
    $("#highest-bidder").text(highBidder);

    // Print the data to the console.
    console.log(highPrice);
    console.log(highBidder);
  }


  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidName = $("#bidder-name").val().trim();
  var bidPrice = parseInt($("#bidder-price").val().trim())

  // Log the Bidder and Price (Even if not the highest)
  console.log(bidName);
  console.log(bidPrice);

  if (bidPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidName,
      highPrice: bidPrice,
    });

    // Log the new High Price
    console.log("High Bidder: ",bidName);
    console.log("High Bid: ",bidPrice);

    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder
    $("#highest-price").text(highPrice);
    $("#highest-bidder").text(highBidder);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
