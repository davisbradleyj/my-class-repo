// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and 
// continue until you've been able to iterate through the array without swapping 
// any elements


function bubbleSortTwo(arr) {
  // ================= code goes here ===========================
  let status = true
  while (status) {
    status = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        status = true;
      }
    }
  }
  return arr
  // ============================================================
}

var age = [34, 23, 3, 76, 20, 84, 18, 9];
var newAge = bubbleSortTwo(age);
console.log(newAge)


