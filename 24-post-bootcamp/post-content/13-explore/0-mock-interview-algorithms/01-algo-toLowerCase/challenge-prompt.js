// toLowerCase


// This function takes in a string as the argument and returns
// a new string with all the characters converted to lower case
function toLowerCase(str) {
  // -------------------- Your Code Here --------------------

// make a function


  // declare an empty string

  var newStr = ""
  // declare mapping object to set uppercase letter as lowercase letter

  var lower = {
      A: "a",
      B: "b",
      C: "c",
      D: "d",
      E: "e",
      F: "f",
      G: "g",
      H: "h",
      I: "i",
      J: "j",
      K: "k",
      L: "l",
      M: "m",
      N: "n",
      O: "o",
      P: "p",
      Q: "q",
      R: "r",
      S: "s",
      T: "t",
      U: "u",
      V: "v",
      W: "w",
      X: "x",
      Y: "y",
      Z: "z"
  }

  // iterate through original string
  for (var i = 0; i < str.length; i++) {
      if (lower.hasOwnProperty(str[i])) {
          newStr += lower[str[i]]
      } else {
          newStr += str[i]
      }

  }
  return newStr

}


  // -------------------- End Code Area ---------------------


// Should be "hello world"
console.log(toLowerCase("Hello World"));

// Should be "test"
console.log(toLowerCase("Test"));

// Should be "rotating cap with nu|v|b3r5 and $ymb0!s"
console.log(toLowerCase("RoTaTiNg CaPs With Nu|V|b3R5 aNd $YmB0!s"));

// Should be an empty string
console.log(toLowerCase(""));

