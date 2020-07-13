// You are given an array of integers, and a positive integer.  
// Find and print the number of pairs where the sum of the pair is divisible by the positive interger.

function divisibleSumPairs(k, ar) {
    let count = 0
    for (let i=0; i<ar.length; i++) {
        for (let j=(i+1); j<ar.length; j++) {
            if ((ar[i]+ar[j]) % k == 0) {
                count++
            }
        }
    }
    return count

}

console.log(divisibleSumPairs(3,[1,3,2,6,1,2]))