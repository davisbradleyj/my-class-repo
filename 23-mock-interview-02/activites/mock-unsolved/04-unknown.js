// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// 
arr = [10,15,3,7]
function sum(num) {
    for (let i=0;i<arr.length;i++) {
        console.log(arr[i])
        for (let j=i+1;j<arr.length;j++) {
            console.log[arr[j]]
            if (num === arr[i]+arr[j]) {
                return true
            }
        }
    }
    return false
}

console.log(sum(22))