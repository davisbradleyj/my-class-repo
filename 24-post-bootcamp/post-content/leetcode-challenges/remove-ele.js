// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length

var removeElement = function(nums, val) {
    for (let i=0; i<nums.length; i++) {
        console.log("I is: " + i)
        if (nums[i] === val) {
            console.log("Nums[i] is: " + nums[i])
            nums.splice(i,1)
            console.log(nums)
            i--
        }
    }
    return nums.length
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))