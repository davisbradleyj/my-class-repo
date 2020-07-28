// ou are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let count = 0
    let even = []
    let odd = []
    for (let i=0; i<integers.length; i++) {
        if (integers[i] % 2 == 0) {
            even.push(integers[i])
            count++
        } else {
            odd.push(integers[i])
        }
    }
    if (count == 1) {
        return even[0] 
    } else {
        return odd[0]
    }
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
