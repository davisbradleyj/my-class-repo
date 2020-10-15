function minimumAbsoluteDifference(arr) {
  arr.sort((a,b) => a-b)
  console.log(arr)
  let hold = arr[arr.length-1] - arr[0] 
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      let temp = arr[j] - arr[i]
      console.log(temp)
      if (temp<hold) {
        hold = temp
        console.log(hold)
      }
    }
  }
  return hold 
}

console.log(minimumAbsoluteDifference([1,-3,71,68,17]))
console.log(minimumAbsoluteDifference([-59,-36,-13,1,-53,-92,-2,-96,-54,75]))

function minAbsDiff(arr) {
  let minDiff = Infinity;
  arr.sort(function(a, b) {
    minDiff = Math.min(minDiff, Math.abs(a - b));
    return a - b;
  });
  return minDiff;
}