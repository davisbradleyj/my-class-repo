// Arrays

// given optimal time, this looks to be a nested loop
// iterate through array
// a max sum needs to be inside each of the loops
// current sum as a variable (inside first loop) 
// max sum as a second variable (which sits outside both loops)
// compare current sum to max sum at end of nested loop each time
// i as start point for current sum

function contig (arr) {
    let maxSum = arr[0]
    let currSum = arr[0]
    let currMax = arr[0]
    for (let i = 0; i<arr.length;i++) {
        currSum = arr[i]
        // console.log(currSum)
        for (let j = i+1; j<arr.length;j++) {
            currSum += arr[j]
            if (currSum>currMax) {
                currMax = currSum
            }
        }
        if (currMax>maxSum) {
            maxSum = currMax
        }
    currSum = 0
    }
    return maxSum
}

arr = [-1,5,-1,3,-10,9,7,4]
console.log(contig(arr))

arr = [2,5,-1,3,-10,-1,-2,-3] 
console.log(contig(arr))
