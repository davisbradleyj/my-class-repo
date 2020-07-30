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

// for test case...
// Curr, Max = 0; currNum = -2; curr still 0, max still 0
// curr, max = 0; currNum = 1; curr now 1, max now 1
// curr, max = 1; currNum = -3; curr now 0, max still 1
// curr=0, max=1; currNum = 4; curr now 4, max now 4
// curr=4, max=4; currNum = -1; curr now 3, max still 4
// curr=3, max=4; currNum = 2; curr now 5, max now 5
// curr=5, max=5; currNum = 1; curr now 6, max now 6
// curr=6, max=6; currNum = -5; curr now 1, max still 6
// curr=1, max=6; currNum = 4; curr now 5, max still 6
// return max = 6