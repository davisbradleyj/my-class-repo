var generate = require("./shared/generate.js");

// Generate an array of the given length.
var length = 10000; // 10000 => 10000000
var stuff = generate(length);
var randomValue = stuff[Math.ceil(Math.random() * length)];

console.log('Stuff Array: ' + stuff);
console.log('Random Value: ' + randomValue);

//Write a for loop that looks at each index of the array, stuff, to see if it matches the random value
//If it does match the random value console.log the index of the element and the random value

//Code Below
function gen() {
for (var i = 0; i < stuff; i++) {
    return randomValue
  }
}
gen()