// 1. Configure Server
var express = require("express")
var app = express();
var PORT = 3000;

//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  var obj = {}

  var domainCount = []


  for (var i = 0; i < arr.length; i++) {
    domainCount.push(arr[i].split(" "))
  }


  for (var j = 0; j < domainCount.length; j++) {

    var visit = parseInt(domainCount[i][0])
    var dom = domainCount[i][1]

    var subDom = dom.split(".")


    for (var k = 0; k < subDom.length; k++) {

      if (!obj[subDom[k]]) {
        obj[subDom[k]] = visit


      } else {
        obj[subDom[k]] += visit
      }
    }
  

  }
return obj


  // ===================================================
}


// At the root route, send the solution as JSON
//3. ================= YOUR WORK HERE ==================
app.get("/", function (req, res) {
  var subDom = getNumVisits(input)
  res.json(subDom)
})


// ===================================================


// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
