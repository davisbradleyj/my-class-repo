/*Write a function called "oddChecker".


Given 2 numbers, "oddChecker" returns true if both numbers are odd

Starter Code :*/
function oddChecker(num1, num2) {
  // code starts here

  if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return true
  } else {
    return false
  }
  // code ends here
}

var output = oddChecker(2, 3);
console.log(output); // --> true

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

/*Write a function called "power".

Given a number and an exponent, "power" returns the number taken to that exponent
DO NOT use the built in Math.pow method

Starter Code :*/
function power(num, exponent) {
  // code starts here
  let value = 1
  for (var i=0; i<exponent; i++){
    value = value * num
  }
  return value
  // code ends here
}

var output = power(2, 3);
console.log(output); // --> 8

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

/*Write a function called "halfsquareRoot".

Given a number, "halfsquareRoot" returns its square root divided by two

Starter Code :*/
function halfsquareRoot(num) {
  // code starts here
  var guess = num / 2;
  var quotient;
  var average;
  for(i = 0; i < 9; i++){
    quotient = num / guess;
    average = (quotient + guess) / 2;
    guess = average;
    console.log(guess)
  }
  var squareRoot = quotient;
  var doubleSquareRoot = squareRoot / 2;
  return doubleSquareRoot;

  // code ends here
}
var output = halfsquareRoot(121);
// var output = halfsquareRoot(121);
console.log(output); // --> 5.5


