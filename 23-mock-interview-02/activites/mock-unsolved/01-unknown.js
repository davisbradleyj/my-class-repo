// given array of elements, return largest consecutive sum
// [1,2,3]
// [2 + 3] = 5


function consec(arr) {
    let currSum = 0
    let maxSum = 0
    for (let i=0; i<arr.length-1;i++) {
        currSum = arr[i]+arr[i+1]
        console.log(currSum)
        if (currSum>maxSum){
            maxSum = currSum
        }
    }
    return maxSum
} 

arr = [1,2,3]
console.log(consec(arr))
// instantiate array = arr
// loop through array
// currSum compared to a maxSum
