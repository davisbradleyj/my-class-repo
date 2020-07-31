// Complete the beautifulDays function in the editor below. It must return the number of beautiful days in the range.
// beautifulDays has the following parameter(s):
// i: the starting day number
// j: the ending day number
// k: the divisor

function beautifulDays(i, j, k) {
    let count = 0
    for (let a=i; a<=j; a++) {
        let b = a.toString().split('').reverse().join('')
        let value = ((a-b)/k)
        if (value % 1 == 0) {
            count++
        }
    }
    return count
}

console.log(beautifulDays(20,23,6))