/*Write a function called "smallestNumber".

Given an array of mixed elements, "smallestNumber" returns the smallest number in the array

ignore values that aren't numbers

Starter Code :*/
function smallestNumber(arr) {

  // code starts here

  // smallest is 'nothing'
  var smallest = null;
  // looping through the array
  for (var i=0; i<arr.length; i++){
    // use typeof to determine what the array item it
    if (typeof arr[i] === 'number') {
      // if there is no smallest number, assign it to smallest
      if (smallest === null) {
        smallest = arr[i];
      // if there is a smallest number, compare the two through a math.min, and assign smallest value to 'smallest'
      } else {
        smallest = Math.min(smallest, arr[i]);
      }
    }
  }
  
  return smallest
  // code ends here
}
var output = smallestNumber([9, 'lincoln', 5, 'octopus', 'a', 4, 10, 'hello']);
console.log(output); // --> 4