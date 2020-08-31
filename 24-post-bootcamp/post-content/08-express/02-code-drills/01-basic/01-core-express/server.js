// 1. Configure Server
let express = require('express');
let app = express()
let PORT = 3500
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
  let obj = {}

  let domainsCount = []

  for (let i = 0; i < arr.length; i++) {
    domainsCount.push(arr[i].split(' '))
    console.log(domainsCount)
  }

  for (let i = 0; i < domainsCount.length; i++) {

    let visits = parseInt(domainsCount[i][0])
    let domain = domainsCount[i][1]
    let subDom = domain.split('.')

    for (let j = 0; j < subDom.length; j++) {
      if (!obj[subDom[j]]) {
        obj[subDom[j]] = visits
        console.log(visits)
        console.log(subDom[j])
        console.log(obj)
      } else {
        obj[subDom[j]] += visits
        console.log(visits)
        console.log(subDom[j])
        console.log(obj)
      }
    }
  }
  return obj
  // ===================================================
}


// At the root route, send the solution as JSON
//3. ================= YOUR WORK HERE ==================
app.get("/", function (req, res) {
  let subDom = getNumVisits(input)
  res.json(subDom)
})

// ===================================================


// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function () {
  console.log("Listening on Port: " + PORT)
})