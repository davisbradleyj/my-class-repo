// Given an array of integers, return indices of the two numbers such that they add up to a specific target

var twoSum = (nums, target) => {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                return [i,j]
            }
        }
    }
};

console.log(twoSum([2,7,10,11],9))