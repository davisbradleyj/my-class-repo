// Find the maximum sum of a contiguous subsequence in an array or list of integers

var maxSequence = function (arr) {
    let max = 0
    let curr = 0
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i]
        curr = Math.max((curr + currNum), 0)
        max = Math.max(curr, max)
    }
    return max
}

console.log(maxSequence([-2,1,-3,4,-1,2,1,-5,4]))