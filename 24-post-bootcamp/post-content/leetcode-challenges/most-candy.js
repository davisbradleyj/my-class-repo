var kidsWithCandies = function (candies, extraCandies) {
  let highest = 0;
  let output = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] >= highest) {
      highest = candies[i]
    }
  }
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= highest) {
      output.push(true);
    } else {
      output.push(false);
    }
  }
  return output;
};

console.log(kidsWithCandies([2,3,5,1,3],3));
console.log(kidsWithCandies([4,2,1,1,2],1));

var refactor = function (candies, extraCandies) {
  let highest = [...candies];
  let output = [];
  highest = highest.sort((a,b) => a-b).pop()
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= highest) {
      output.push(true);
    } else {
      output.push(false);
    }
  }
  return output;
}

console.log(refactor([2,3,5,1,3],3));