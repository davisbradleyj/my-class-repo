// 1. Configure Server
var express = require("express")
var app = express();
var PORT = 3000;
//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "The quick brown dog jumped over the lazy fox apple"

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================
  
  //create array of pass variable split by space
  // make lower case
  var array = sen.toLowerCase().split(" ")
  for (var i=0; i<array.length;i++) {

  }



  // ===================================================
}


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  app.get("/", function(req,res) {
    //You can sen strings as JSON
    res.json(pigLatin(input))
  })
  // ===================================================

// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});
