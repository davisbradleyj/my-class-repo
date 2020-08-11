// Given a non-empty array of integers, every element appears twice except for one. 
// Find that single one.

// Your algorithm should have a linear runtime complexity. 
// Could you implement it without using extra memory?

var singleNumber = function(nums) {
    nums.sort()
    console.log(nums)

    for (let i=0; i<nums.length; i+=2) {
        if (nums[i] != nums[i+1]) {
            return nums[i]
        }
    }
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))