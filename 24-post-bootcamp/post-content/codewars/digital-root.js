// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

function digital_root(n) {
    let result = 0
    String(n).split('').map(num => {
        result += Number(num);
    })
    return result >= 10 ? digital_root(result) : result
}

console.log(digital_root(456))
console.log(digital_root(457))
console.log(digital_root(10001))

const digRoot = function(a) {
    return (a-1) % 9 + 1
}

console.log(digRoot(456))
// 455 % 9 = 5
// 5 + 1
console.log(digRoot(457))
// 456 % 9 = 6
// 6 + 1
console.log(digRoot(10001))
// 10000 % 9 = 1
// 1 + 1