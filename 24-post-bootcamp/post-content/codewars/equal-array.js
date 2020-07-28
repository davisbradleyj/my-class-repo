// Given an array of integers, find an index N where the sum of the integers to the left of N 
// is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return

function findEvenIndex(arr) {
    // assign two placeholders
  let sum1 = 0
  let sum2 = 0
    // get a full array total sum
  for (let i=0; i<arr.length; i++) {
      sum1 += arr[i]
      console.log("Sum1 i: ",sum1)
  }
    // decriment sum1 from index 0, while incrimenting sum2 from index 0
  for (let j=0; j<arr.length; j++) {
      // decriment of sum1
      sum1 -= arr[j]
      console.log("Sum1 j: ",sum1)
      // check to see if the two sums are equal
      if (sum2 == sum1) {
          return j
      }
      // incriment of sum2
      sum2 += arr[j]
      console.log("Sum2: ", sum2)
  }

  return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
