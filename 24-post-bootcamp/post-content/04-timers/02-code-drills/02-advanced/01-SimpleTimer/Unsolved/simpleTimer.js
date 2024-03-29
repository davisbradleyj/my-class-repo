//  Step 1: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

// ---------------------
setTimeout(fiveSeconds,5000)
setTimeout(tenSeconds,10000)
setTimeout(timeUp,15000)
// ---------------------

// Step 2:
// Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>")
  // console log 10 seconds left
  console.log("10 seconds left")
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>")
  // console log 5 seconds left
  console.log("5 seconds left")
}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  $("#time-left").append("<h2>Times Up!</h2>")
  // console log done
  console.log("Done!")
}
