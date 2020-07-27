// return the second largest element from an array

function getSecondLargest(nums) {
    // Complete the function
    let largest = nums[0]
    let second
    for (let i=1; i<nums.length; i++) {
        if (nums[i] == largest) {
            largest = nums[i]
        }
        else if (nums[i]>largest) {
            second = largest
            largest = nums[i]
        } 
        else if (nums[i]>second) {
            second = nums[i]
        }
    }
    return second
}

console.log(getSecondLargest([2,3,6,6,5]))