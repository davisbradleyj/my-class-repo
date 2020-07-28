// Modify and return the array so that all even elements are doubled and all odd elements are tripled.

function modifyArray(nums) {
    return nums.map((i) => (i%2 == 0) ? i * 2 : i * 3)
}

console.log(modifyArray([1,2,3,4,5]))