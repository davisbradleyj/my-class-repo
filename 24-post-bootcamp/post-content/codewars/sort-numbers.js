// Finish the solution so that it sorts the passed in array of numbers. 
// If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
  if (nums == null) {
    return []
  } else {
    return nums.sort(function(a,b){return a-b})
    // console.log(nums)
  }
}

console.log(solution([1,2,3,5,10]))

function solution2(nums){

    return (nums || []).sort(function(a,b){return a-b})
    // console.log(nums)
  }

console.log(solution2([1,2,3,5,10]))