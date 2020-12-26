var twoSum = function(numbers, target) {
  for (let i=0; i<numbers.length; i++) {
    for (let j=i+1; j<numbers.length; j++) {
      if (target === numbers[i] + numbers[j]) {
        return [i+1,j+1]
      }
    }
  }
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4],6));
console.log(twoSum([-1,0],-1))