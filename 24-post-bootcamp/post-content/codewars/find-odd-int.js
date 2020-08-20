// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
  let arr = A.sort(function(a,b){return a-b})
  console.log(arr)
  for (let i=0; i<arr.length; i+=2) {
    if (arr[i] != arr[i+1]) {
      return arr[i]
    }
  }
  return 0;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))