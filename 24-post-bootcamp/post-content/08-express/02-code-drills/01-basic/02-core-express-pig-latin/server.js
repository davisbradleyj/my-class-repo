// 1. Configure Server
let express = require('express');
let app = express()
let PORT = 3600

//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "The quick brown dog jumped over the lazy fox apple"

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================
  let letters = {
    "a": true,
    "b": false,
    "c": false,
    "d": false,
    "e": true,
    "f": false,
    "g": false,
    "h": false,
    "i": true,
    "j": false,
    "k": false,
    "l": false,
    "m": false,
    "n": false,
    "o": true,
    "p": false,
    "q": false,
    "r": false,
    "s": false,
    "t": false,
    "u": true,
    "v": false,
    "w": false,
    "x": false,
    "y": false,
    "z": false
  }

  let arr = sen.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {

    let wordLen = arr[i].length
    arr[i] = arr[i].split('');

    if (letters[arr[i][0]]) {
      arr[i].push('w')
    }

    for (let j = 0; j < wordLen && !letters[arr[i][j]]; j++) {
      arr[i].push(arr[i][j])
      arr[i].splice(0, j)
    }
    arr[i] = arr[i].join('') + 'ae'
  }
  arr = arr.join(' ')
  return (arr)

  // ===================================================
}


// At the root route, send the solution as JSON
//3. ================= YOUR WORK HERE ==================
app.get('/', function (req, res) {
  res.json(pigLatin(input))
})
// ==================================================

// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function () {
  console.log("Listening on Port: " + PORT)
})