// Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

var majorityElement = function(nums) {
    let n = nums.length
    nums = nums.sort()
    console.log(nums)
    return nums[(parseInt(n/2))]
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))